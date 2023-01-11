from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import models, serializers


class ToolView(APIView):
    def get(self, request, format=None):
        """
        Get List of all tools
        """
        tools = models.ToolModel.objects.all()
        serializer = serializers.ToolListSerializer(tools, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Add/Update a tool
        """
        try:
            """
            If the tool already exists, update it.
            """
            toolModel = models.ToolModel.objects.get(slug=request.data["slug"])
            serializer = serializers.ToolSerializer(
                toolModel, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            """
            If the tool does not exist, create it.
            """
            serializer = serializers.ToolSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ToolDataView(APIView):
    def get(self, request, slug, format=None):
        """
        Get details of a tool
        """
        tool = models.ToolModel.objects.get(slug=slug)
        serializer = serializers.ToolDataSerializer(tool)
        return Response(serializer.data)


class ToolWatchView(APIView):
    def get(self, request, slug, format=None):
        """
        Update tool view count
        """
        tool = models.ToolModel.objects.get(slug=slug)
        tool.views += 1
        tool.save()
        return Response(status=status.HTTP_202_ACCEPTED)


class ToolRatingView(APIView):
    def get(self, request, slug, format=None):
        """
        Get rating of a tool
        """
        tool = models.ToolModel.objects.get(slug=slug)
        serializer = serializers.ToolRatingSerializer(tool)
        return Response(serializer.data)

    def post(self, request, slug, format=None):
        """
        Update rating of a tool
        """
        toolModel = models.ToolModel.objects.get(slug=slug)
        serializer = serializers.ToolRatingSerializer(
            toolModel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RelatedToolsView(APIView):
    def get(self, request, slug, format=None):
        """
        Find 4 tools with same category
        """
        categories = models.ToolModel.objects.get(slug=slug).category.all()
        tools = models.ToolModel.objects.filter(category__in=categories).exclude(
            slug=slug
        )[0:4]
        serializer = serializers.ToolListSerializer(tools, many=True)
        return Response(serializer.data)
