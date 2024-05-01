# serializers.py
from rest_framework import serializers
from .models import (
    User, Image, Feedback, Rating, ChatForum, Message, ImagePost, UserProfile
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class ChatForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatForum
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class ImagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePost
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

        
