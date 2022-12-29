from django.db import models


class GithubUserModel(models.Model):
    username = models.CharField(
        max_length=255, default="", unique=True, primary_key=True
    )

    def __unicode__(self):
        return self.username

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Github User"
        verbose_name_plural = "Github Users"


class ToolCategoryModel(models.Model):
    title = models.CharField(max_length=255, default="")

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Tool Category"
        verbose_name_plural = "Tool Categories"


class ToolPackageModel(models.Model):
    title = models.CharField(max_length=255, default="")

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Tool Package"
        verbose_name_plural = "Tool Packages"


class ToolModel(models.Model):
    slug = models.CharField(max_length=100, unique=True, primary_key=True)
    title = models.CharField(max_length=255, default="")
    description = models.TextField(default="")
    markdown = models.TextField(default="")
    category = models.ManyToManyField(ToolCategoryModel, related_name="tools")
    package = models.ManyToManyField(ToolPackageModel, related_name="tools")
    contributors = models.ManyToManyField(GithubUserModel, related_name="tools")
    last_updated = models.DateTimeField(default=None, null=True)
    rating = models.FloatField(default=0)
    rating_count = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    used = models.IntegerField(default=0)

    def __unicode__(self):
        return self.slug

    def __str__(self):
        return self.slug

    class Meta:
        verbose_name = "Tool"
        verbose_name_plural = "Tools"
