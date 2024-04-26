from django.urls import path
from .views import (
    user_list, user_detail, image_list, image_detail,
    feedback_list, feedback_detail, rating_list, rating_detail,
    chatforum_list, chatforum_detail, message_list, message_detail,
    login,predict_model_1,predict_model_2, chat_view
)

urlpatterns = [
    path('predict_model_1/',predict_model_1,name='predict_model_1'),
    path('predict_model_2/',predict_model_2,name='predict_model_2'),
    path('login/', login, name='login'),
    
    path('users/', user_list, name='user-list'),
    path('users/<int:pk>/', user_detail, name='user-detail'),

    path('images/', image_list, name='image-list'),
    path('images/<int:pk>/', image_detail, name='image-detail'),

    path('feedbacks/', feedback_list, name='feedback-list'),
    path('feedbacks/<int:pk>/', feedback_detail, name='feedback-detail'),

    path('ratings/', rating_list, name='rating-list'),
    path('ratings/<int:pk>/', rating_detail, name='rating-detail'),

    path('chatforums/', chatforum_list, name='chatforum-list'),
    path('chatforums/<int:pk>/', chatforum_detail, name='chatforum-detail'),

    path('messages/', message_list, name='message-list'),
    path('messages/<int:pk>/', message_detail, name='message-detail'),

    path('chat/', chat_view, name='chat_view'),

    path('get-users/', get_all_user_profile, name='get_user_profile'),
    path('create-user-profiles/', create_user_profile, name='create_user_profile'),
    path('update-user-profiles/<str:pk>/', update_user_profile, name='update_user_profile'),
    path('set-dp/<str:pk>/', set_dp, name='set_dp'),
]
