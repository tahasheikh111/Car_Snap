from django.urls import path
from  .views import main

urlpatterns = [
    path('home', main), #when ever this api happens sent it to api.urls
    path('', main) #when ever this api happens sent it to api.urls
]