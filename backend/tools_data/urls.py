from django.urls import path
from . import views


urlpatterns = [
    path("", views.ToolView.as_view(), name="ToolView"),
    path("<str:slug>/", views.ToolDataView.as_view(), name="ToolDataView"),
    path("watch/<str:slug>/", views.ToolWatchView.as_view(), name="ToolWatchView"),
    path("ratings/<str:slug>/", views.ToolRatingView.as_view(),
         name="ToolRatingView"),
    path(
        "related/<str:slug>/", views.RelatedToolsView.as_view(), name="RelatedToolsView"
    ),
]
