from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    user_list, user_detail, image_list, image_detail,
    feedback_list, feedback_detail, rating_list, rating_detail,
    chatforum_list, chatforum_detail, message_list, message_detail,
    login,predict_model_1,predict_model_2, chat_view,update_user_profile, create_user_profile,get_all_user_profile,set_dp,
    get_user,get_user_photo,create_image,get_images,get_image
)

urlpatterns = [
    path('predict_model_1/',predict_model_1,name='predict_model_1'),
    path('predict_model_2/',predict_model_2,name='predict_model_2'),
    path('login/', login, name='login'),
    
    path('users/', user_list, name='user-list'),
    path('users/<int:pk>/', user_detail, name='user-detail'),

    path('images/', create_image, name='create_image'),
    path('images/<str:user_address>/', get_images, name='get_images'),
    path('image/<str:id>/', get_image, name='get_images'),

    path('feedbacks/', feedback_list, name='feedback-list'),
    path('feedbacks/<int:pk>/', feedback_detail, name='feedback-detail'),

    path('ratings/', rating_list, name='rating-list'),
    path('ratings/<int:pk>/', rating_detail, name='rating-detail'),

    path('chatforums/', chatforum_list, name='chatforum-list'),
    path('chatforums/<int:pk>/', chatforum_detail, name='chatforum-detail'),

    path('messages/', message_list, name='message-list'),
    path('messages/<int:pk>/', message_detail, name='message-detail'),

    path('chat/', chat_view, name='chat_view'),
    

    path('get-user/<str:pk>/', get_user, name='get_user'),
    path('get-user-photo/<str:pk>/', get_user_photo, name='get_user_photo'),
    path('get-users/', get_all_user_profile, name='get_user_profile'),
    path('create-user-profiles/', create_user_profile, name='create_user_profile'),
    path('update-user-profiles/<str:pk>/', update_user_profile, name='update_user_profile'),
    path('set-dp/<str:pk>/', set_dp, name='set_dp'),
    # Serving static files during development
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
