"""base URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Login
    2. Add a URL to urlpatterns:  path('', Login.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    url(r'^app/', csrf_exempt(TemplateView.as_view(template_name='index.html')), name='app'),
]