from django.urls import path
from .views import (
    user_list, user_detail, image_list, image_detail,
    feedback_list, feedback_detail, rating_list, rating_detail,
    chatforum_list, chatforum_detail, message_list, message_detail,
    login,predict_model_1,predict_model_2,user_info_view, image_info_view, image_post_view,image_post_create,
    UserProfileView,
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


    path('api/user/profile/', UserProfileView.as_view(), name='user-profile'),

    # URL for retrieving user information by hash
    path('api/user/info/<str:user_hash>/', user_info_view, name='user-info'),

    # URL for retrieving image information by hash
    path('api/image/info/<str:image_hash>/', image_info_view, name='image-info'),

    # URL for rendering the image post by hash
    path('image/post/<str:image_hash>/', image_post_view, name='image-post'),

     path('api/imagepost/', image_post_create, name='image-post-create'),
]
