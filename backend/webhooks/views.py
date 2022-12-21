from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import git
import os

# For Gihub signatue verification
import requests
from ipaddress import ip_address, ip_network
import hmac
from hashlib import sha1
from django.conf import settings
from django.utils.encoding import force_bytes

from . import models


# Validate Github signature
def ValidateGithubAuth(request):
    try:
        # This source code from:
        # https://simpleisbetterthancomplex.com/tutorial/2016/10/31/how-to-handle-github-webhooks-using-django.html

        # Verify if request came from GitHub
        forwarded_for = "{}".format(request.META.get("HTTP_X_FORWARDED_FOR"))
        client_ip_address = ip_address(forwarded_for)
        whitelist = requests.get("https://api.github.com/meta").json()["hooks"]

        for valid_ip in whitelist:
            if client_ip_address in ip_network(valid_ip):
                break
        else:
            return False

        # Verify the request signature
        header_signature = request.META.get("HTTP_X_HUB_SIGNATURE")
        if header_signature is None:
            return False

        sha_name, signature = header_signature.split("=")
        if sha_name != "sha1":
            return False

        mac = hmac.new(
            force_bytes(settings.GITHUB_WEBHOOK_SECRET),
            msg=force_bytes(request.body),
            digestmod=sha1,
        )
        if not hmac.compare_digest(
            force_bytes(mac.hexdigest()), force_bytes(signature)
        ):
            return False

        # If request reached this point we are in a good shape
        return True
    except:
        return False


# Server Update View
class ServerUpdateView(APIView):
    def post(self, request):
        try:
            # Validate request
            if not ValidateGithubAuth(request):
                return Response(
                    {"message": "Not a valid request !!!"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Get event type
            event = request.META.get("HTTP_X_GITHUB_EVENT")

            if event == "ping":
                return Response(status=status.HTTP_200_OK)

            elif event == "push":
                try:
                    # Perform "git pull" to update the server code
                    repo = git.Repo(
                        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        search_parent_directories=True,
                    )
                    origin = repo.remotes.origin
                    origin.pull()

                    # Add server update status to database
                    server_update = models.ServerUpdateModel()
                    server_update.server_update_status = True
                    server_update.save()

                    return Response(
                        {"message": "Successfully updated the server code !!!"},
                        status=status.HTTP_200_OK,
                    )

                except Exception as e:
                    print(e)

                    # Add server update status to database
                    server_update = models.ServerUpdateModel()
                    server_update.server_update_status = False
                    server_update.server_update_error = str(e)
                    server_update.save()

                    return Response(
                        {"message": "Error updating server code :("},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    )

            # In case we receive an event that's not "ping" or "push"
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(
                {"message": "Error updating server code :("},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
