"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # Backend Admin
    path("admin/", admin.site.urls),
    # Webhooks
    path("api/webhooks/", include("webhooks.urls")),
    # Tools API (to execute tools)
    path("api/tools/", include("tools.urls")),
    # Tools Data API (to get tools data)
    path("api/tools-data/", include("tools_data.urls")),
    # API
    path("api/", include("api.urls")),
]


# For serving media files in development
urlpatterns = urlpatterns + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
