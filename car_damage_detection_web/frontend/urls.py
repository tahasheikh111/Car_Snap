from django.urls import path
from .views import index1
urlpatterns = [
    path('',index1),
    path('AboutUs',index1),
    path('Contact',index1),
    path('Pricing',index1),
    path('ReviewPage',index1),
    path('RatingPage',index1),
    path('ChatForum',index1),
    path('Profile',index1),
    path('UploadPage',index1),
    path('Signup',index1),
    path('login',index1)
]
