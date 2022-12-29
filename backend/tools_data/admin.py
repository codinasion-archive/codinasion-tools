from django.contrib import admin

from . import models


@admin.register(models.GithubUserModel)
class GithubUserAdmin(admin.ModelAdmin):
    list_display = ("username",)


@admin.register(models.ToolCategoryModel)
class ToolCategoryAdmin(admin.ModelAdmin):
    list_display = ("title",)


@admin.register(models.ToolPackageModel)
class ToolPackageAdmin(admin.ModelAdmin):
    list_display = ("title",)


@admin.register(models.ToolModel)
class ToolAdmin(admin.ModelAdmin):
    list_display = ("slug", "title", "description")
