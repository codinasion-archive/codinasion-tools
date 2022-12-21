from django.urls import path
from . import views


urlpatterns = [
    # Server Update (on push to GitHub)
    path("server-update/", views.ServerUpdateView.as_view(), name="ServerUpdateView"),
]
