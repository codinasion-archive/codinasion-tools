from rest_framework import serializers

from . import models


class GithubUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=100, required=True)

    class Meta:
        model = models.GithubUserModel
        fields = ["username"]

    def create(self, validated_data):
        return models.GithubUserModel.objects.get_or_create(**validated_data)[0]

    def update(self, instance, validated_data):
        instance.username = validated_data.get("username", instance.username)
        instance.save()
        return instance


class ToolCategorySerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100, required=True)

    class Meta:
        model = models.ToolCategoryModel
        fields = ["title"]

    def create(self, validated_data):
        return models.ToolCategoryModel.objects.get_or_create(**validated_data)[0]

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.save()
        return instance


class ToolPackageSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100, required=True)

    class Meta:
        model = models.ToolPackageModel
        fields = ["title"]

    def create(self, validated_data):
        return models.ToolPackageModel.objects.get_or_create(**validated_data)[0]

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.save()
        return instance


class ToolSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(max_length=100, required=True)
    title = serializers.CharField(max_length=255, required=True)
    description = serializers.CharField(required=True, allow_blank=True)
    markdown = serializers.CharField(required=True, allow_blank=True)
    js = serializers.CharField(required=True, allow_blank=True)
    ts = serializers.CharField(required=True, allow_blank=True)
    py = serializers.CharField(required=True, allow_blank=True)
    sh = serializers.CharField(required=True, allow_blank=True)
    category = ToolCategorySerializer(many=True, required=True)
    package = ToolPackageSerializer(many=True, required=True)
    contributors = GithubUserSerializer(many=True, required=True)
    last_updated = serializers.DateTimeField(required=True)
    rating = serializers.IntegerField(read_only=True)
    rating_count = serializers.IntegerField(read_only=True)
    views = serializers.IntegerField(read_only=True)
    used = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.ToolModel
        fields = [
            "slug",
            "title",
            "description",
            "markdown",
            "js",
            "ts",
            "py",
            "sh",
            "category",
            "package",
            "contributors",
            "last_updated",
            "rating",
            "rating_count",
            "views",
            "used",
        ]

    def create(self, validated_data):
        category_data = validated_data.pop("category")
        package_data = validated_data.pop("package")
        contributors_data = validated_data.pop("contributors")

        categories = [
            ToolCategorySerializer.create(ToolCategorySerializer(), item)
            for item in category_data
        ]
        packages = [
            ToolPackageSerializer.create(ToolPackageSerializer(), item)
            for item in package_data
        ]
        contributors = [
            GithubUserSerializer.create(GithubUserSerializer(), item)
            for item in contributors_data
        ]

        tool = models.ToolModel.objects.get_or_create(**validated_data)[0]
        tool.category.set(categories)
        tool.package.set(packages)
        tool.contributors.set(contributors)
        return tool

    def update(self, instance, validated_data):
        category_data = validated_data.pop("category")
        package_data = validated_data.pop("package")
        contributors_data = validated_data.pop("contributors")

        categories = [
            ToolCategorySerializer.create(ToolCategorySerializer(), item)
            for item in category_data
        ]
        packages = [
            ToolPackageSerializer.create(ToolPackageSerializer(), item)
            for item in package_data
        ]
        contributors = [
            GithubUserSerializer.create(GithubUserSerializer(), item)
            for item in contributors_data
        ]

        instance.slug = validated_data.get("slug", instance.slug)
        instance.title = validated_data.get("title", instance.title)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.markdown = validated_data.get("markdown", instance.markdown)
        instance.js = validated_data.get("js", instance.js)
        instance.ts = validated_data.get("ts", instance.ts)
        instance.py = validated_data.get("py", instance.py)
        instance.sh = validated_data.get("sh", instance.sh)
        instance.last_updated = validated_data.get(
            "last_updated", instance.last_updated
        )
        instance.save()

        instance.category.set(categories)
        instance.package.set(packages)
        instance.contributors.set(contributors)
        return instance


class ToolListSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(read_only=True)
    title = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    category = ToolCategorySerializer(many=True, read_only=True)
    package = ToolPackageSerializer(many=True, read_only=True)
    views = serializers.IntegerField(read_only=True)
    used = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.ToolModel
        fields = [
            "slug",
            "title",
            "description",
            "category",
            "package",
            "views",
            "used",
        ]


class ToolDataSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(read_only=True)
    title = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    markdown = serializers.CharField(read_only=True)
    js = serializers.CharField(read_only=True)
    ts = serializers.CharField(read_only=True)
    py = serializers.CharField(read_only=True)
    sh = serializers.CharField(read_only=True)
    category = ToolCategorySerializer(many=True, read_only=True)
    package = ToolPackageSerializer(many=True, read_only=True)
    contributors = GithubUserSerializer(many=True, read_only=True)
    last_updated = serializers.DateTimeField(read_only=True)
    rating = serializers.IntegerField(read_only=True)
    rating_count = serializers.IntegerField(read_only=True)
    views = serializers.IntegerField(read_only=True)
    used = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.ToolModel
        fields = [
            "slug",
            "title",
            "description",
            "markdown",
            "js",
            "ts",
            "py",
            "sh",
            "category",
            "package",
            "contributors",
            "last_updated",
            "rating",
            "rating_count",
            "views",
            "used",
        ]


class ToolRatingSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(read_only=True)
    rating = serializers.FloatField(required=True)
    rating_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.ToolModel
        fields = ["slug", "rating", "rating_count"]

    def update(self, instance, validated_data):
        rating = validated_data.pop("rating")
        updated_rating = (instance.rating * instance.rating_count + rating) / (
            instance.rating_count + 1
        )
        instance.rating = round(updated_rating, 2)
        instance.rating_count = instance.rating_count + 1
        instance.save()
        return instance


class TestimonialSerializer(serializers.ModelSerializer):
    user = GithubUserSerializer()
    testimonial = serializers.CharField(required=True)

    class Meta:
        model = models.TestimonialModel
        fields = ["user", "testimonial"]

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user = GithubUserSerializer.create(GithubUserSerializer(), user_data)
        testimonial = models.TestimonialModel.objects.get_or_create(
            user=user, **validated_data
        )[0]
        return testimonial

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user")
        user = GithubUserSerializer.create(GithubUserSerializer(), user_data)
        instance.user = user
        instance.testimonial = validated_data.get(
            "testimonial", instance.testimonial)
        instance.save()
        return instance
