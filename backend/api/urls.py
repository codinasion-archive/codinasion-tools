from django.urls import path, register_converter
from . import views


urlpatterns = [
    path("contributors/", views.ContributorsView.as_view(), name="contributors"),
    path("most-used-tools/", views.MostUsedToolsView.as_view(), name="most-used-tools"),
    path("category/", views.CategoryView.as_view(), name="category"),
    path("testimonials/", views.TestimonialsView.as_view(), name="testimonials"),
]
