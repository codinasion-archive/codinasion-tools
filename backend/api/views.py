from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# for token authentication
from rest_framework.permissions import IsAuthenticated

import requests
import time

from tools_data import models as tools_data_models
from tools_data import serializers as tools_data_serializers


class ContributorsView(APIView):
    """
    Get list of contributors from GitHub API
    or, return the list of contributors from the database
    """

    def get(self, request, format=None):
        page = 1
        contributors_list = []
        while True:
            contributors_data = requests.get(
                "https://api.github.com/repos/codinasion/codinasion-tools"
                + "/contributors?per_page=100&page="
                + str(page),
                headers={
                    "Content-Type": "application/json",
                },
            )

            if contributors_data.status_code != 200:
                break

            contributors_data = contributors_data.json()

            for contributor in contributors_data:
                contributors_list.append(
                    {
                        "username": contributor["login"],
                    }
                )

            if len(contributors_data) < 100:
                break

            page += 1

            time.sleep(1)

        if len(contributors_list) == 0:
            contributors = tools_data_models.GithubUserModel.objects.all()
            serializer = tools_data_serializers.GithubUserSerializer(
                contributors, many=True
            )
            return Response(serializer.data, status=status.HTTP_200_OK)
        serializer = tools_data_serializers.GithubUserSerializer(
            contributors_list, many=True
        )
        return Response(serializer.data, status=status.HTTP_200_OK)


class MostUsedToolsView(APIView):
    """
    List of tools based on the number of times they have been used
    """

    def get(self, request, format=None):
        tools = tools_data_models.ToolModel.objects.all().order_by("-used")[:10]
        serializer = tools_data_serializers.ToolListSerializer(tools, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryView(APIView):
    """
    List of categories where the number of tools is greater than 0
    """

    def get(self, request, format=None):
        categories = tools_data_models.ToolCategoryModel.objects.filter(
            tools__isnull=False
        ).distinct()
        serializer = tools_data_serializers.ToolCategorySerializer(
            categories, many=True
        )
        return Response(serializer.data, status=status.HTTP_200_OK)


class TestimonialsView(APIView):
    """
    List of testimonials from users
    """

    def get(self, request, format=None):
        testimonials = tools_data_models.TestimonialModel.objects.all()
        serializer = tools_data_serializers.TestimonialSerializer(
            testimonials, many=True
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = tools_data_serializers.TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
