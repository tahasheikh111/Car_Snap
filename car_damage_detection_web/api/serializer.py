# from model it takes and convert it into JSON format for frontend easy to understand the backend quewruies and give response to frontend
from rest_framework import serializers

from .models import User, Image, Feedback, Rating, ChatForum, Message

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


