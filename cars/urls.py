from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    path('login/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('garage/', include('garage.urls')),


]
