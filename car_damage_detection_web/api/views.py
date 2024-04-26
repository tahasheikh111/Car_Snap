import os
#from gemini import Conversation
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import tensorflow as tf
import cv2
import numpy as np
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import requests
import json
import google.generativeai as genai


from .models import User, Image, Feedback, Rating, ChatForum, Message
from .serializer import (
    UserSerializer, ImageSerializer, FeedbackSerializer,
    RatingSerializer, ChatForumSerializer, MessageSerializer
)


model_path1 = "api/models/model1.h5"
model1 = tf.keras.models.load_model(model_path1)
print("MODEL1 LOADED")
model_path2 = "api/models/model2.h5"
model2 = tf.keras.models.load_model(model_path2)
print("MODEL2 LOADED")

@api_view(['POST'])
def predict_model_1(request):
    try:
        # Read and decode image
        uploaded_image = request.FILES.get('image')
        nparr = np.frombuffer(uploaded_image.read(), np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        # Resize the image
        resized_img = cv2.resize(img, (256, 256))
        
        # Preprocess the image (normalize)
        normalized_img = resized_img / 255.0
        
        # Make predictions
        yhat = model1.predict(np.expand_dims(normalized_img, 0))
        predicted_class = int(np.argmax(yhat))
        if(predicted_class==1):
            predicted_class="Damaged"
        else:
            predicted_class="Not Damaged"
        
        return Response({'predicted_class': predicted_class})
    
    except Exception as e:
        return Response({'error': str(e)})

@api_view(['POST'])
def predict_model_2(request):
    try:
        # Read and decode image
        uploaded_image = request.FILES.get('image')
        nparr = np.frombuffer(uploaded_image.read(), np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        # Resize the image
        resized_img = cv2.resize(img, (256, 256))
        
        # Preprocess the image (normalize)
        normalized_img = resized_img / 255.0
        
        # Make predictions
        yhat = model2.predict(np.expand_dims(normalized_img, 0))
        predicted_class = int(np.argmax(yhat))
        if(predicted_class==0):
            predicted_class="Bonnet Damaged"
        elif(predicted_class==1):
            predicted_class="Sides Damaged"
        elif(predicted_class==2):
            predicted_class="Trunk Damaged"
        elif(predicted_class==3):
            predicted_class="WindShield Damaged"
        
        return Response({'predicted_class': predicted_class})
    
    except Exception as e:
        return Response({'error': str(e)})

def authenticate_user(email, password):
    email = email.strip()  # Trim whitespace from email
    print("Attempting to authenticate with email:", email)  # Print trimmed email for debugging
    try:
        user = User.objects.get(email=email)
        print("User found:", user)  # Print user object for debugging
        if user.password==password:
            return True

    except User.DoesNotExist:
        print("User does not exist.")  # Print message for debugging
    return None


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        # Authenticate user
        print(email, password)
        user = authenticate_user(email, password)
        print(user)
        if user is not None:
            # User authenticated successfully
            return Response({'message': 'User authenticated successfully'})
        else:
            # Authentication failed
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)




@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        users = User.objects.all()
        users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET', 'POST'])
def image_list(request):
    if request.method == 'GET':
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def image_detail(request, pk):
    try:
        image = Image.objects.get(pk=pk)
    except Image.DoesNotExist:
        return Response({'error': 'Image not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ImageSerializer(image)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ImageSerializer(image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def feedback_list(request):
    if request.method == 'GET':
        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def feedback_detail(request, pk):
    try:
        feedback = Feedback.objects.get(pk=pk)
    except Feedback.DoesNotExist:
        return Response({'error': 'Feedback not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FeedbackSerializer(feedback)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        feedback.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def rating_list(request):
    if request.method == 'GET':
        ratings = Rating.objects.all()
        serializer = RatingSerializer(ratings, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def rating_detail(request, pk):
    try:
        rating = Rating.objects.get(pk=pk)
    except Rating.DoesNotExist:
        return Response({'error': 'Rating not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RatingSerializer(rating)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RatingSerializer(rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        rating.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def chatforum_list(request):
    if request.method == 'GET':
        chatforums = ChatForum.objects.all()
        serializer = ChatForumSerializer(chatforums, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ChatForumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def chatforum_detail(request, pk):
    try:
        chatforum = ChatForum.objects.get(pk=pk)
    except ChatForum.DoesNotExist:
        return Response({'error': 'ChatForum not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ChatForumSerializer(chatforum)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ChatForumSerializer(chatforum, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        chatforum.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def message_list(request):
    if request.method == 'GET':
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def message_detail(request, pk):
    try:
        message = Message.objects.get(pk=pk)
    except Message.DoesNotExist:
        return Response({'error': 'Message not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MessageSerializer(message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    

# Set up your API key
os.environ['GOOGLE_API_KEY'] = "AIzaSyA4PYlDIlUN1ZSGI5nPfKfnvvrPmug33qU"
api_KEY = "AIzaSyA4PYlDIlUN1ZSGI5nPfKfnvvrPmug33qU"


@csrf_exempt
def chat_view(request):
    if request.method == 'POST':
        try:
            # Extract the message from the request data
            data = json.loads(request.body)
            contents = data.get('contents')
            print("Received payload:", data)  # Debugging statement

            if contents and isinstance(contents, list) and len(contents) > 0:
                user_message = contents[0]['parts'][0]['text']
                print("User message:", user_message)  # Debugging statement

                # Set up the generative AI model
                genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
                model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest',
                               system_instruction="""You are a friendly AI assistant.
                                                    You are to answer only cars related topics and questions.
                                                    Provide clear and straightforward clarifications and answers to questions.
                                                    If you don't have information on the subject matter kindly make it known.
                                                    If questions outside cars are asked, let the user know that you are
                                                    an assistant for cars related topics.""")

                # Generate content based on the user message
                response = model.generate_content(user_message)
                generated_content = response.text

                # Return the generated content as bot response
                print("Generated content:", generated_content)  # Debugging statement
                return JsonResponse({'message': generated_content})

            else:
                return JsonResponse({'error': 'Invalid request payload'}, status=400)

        except Exception as e:
            # Return error message if any exception occurs
            return JsonResponse({'error': str(e)}, status=500)

    else:
        # Return error if the request method is not allowed
        return JsonResponse({'error': 'Method not allowed'}, status=405)


from .serializer import (
    UserProfileSerializer,
)
@api_view(['GET'])
def get_all_user_profile(request):
    # Retrieve all UserProfile instances from the database
    user_profiles = UserProfile.objects.all()
    
    # Serialize the instances
    serializer = UserProfileSerializer(user_profiles, many=True)
    
    # Return the serialized data in the response
    return Response(serializer.data)


@api_view(['POST'])
def create_user_profile(request):
    # Extract the id from the request message
    id_from_message = request.data.get('id')
    
    # Check if id is provided in the request
    if not id_from_message:
        return Response({'error': 'id is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if a UserProfile with the same id already exists
    if UserProfile.objects.filter(id=id_from_message).exists():
        return Response({'error': 'UserProfile with this id already exists'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new UserProfile instance with the id from the message
    serializer = UserProfileSerializer(data={'id': id_from_message})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def set_dp(request, pk):
    try:
        user_profile = UserProfile.objects.get(pk=pk)
    except UserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if 'photo' not in request.data:
        return Response({'error': 'photo is required'}, status=status.HTTP_400_BAD_REQUEST)

    # Get the uploaded image data
    photo_data = request.data['photo']

    # Save the image file to the appropriate location (e.g., profile_photos/)
    user_profile.photo.save(photo_data.name, photo_data, save=True)

    # Update the photo field of the UserProfile instance with the path to the saved image file
    user_profile.save()

    # Serialize the updated UserProfile instance
    serializer = UserProfileSerializer(user_profile)

    # Return the serialized data in the response
    return Response(serializer.data)




@api_view(['PATCH'])
def update_user_profile(request, pk):
    try:
        user_profile = UserProfile.objects.get(pk=pk)
    except UserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if 'username' in request.data:
        # Update username if provided
        new_username = request.data['username']
        user_profile.name = new_username
        
    if 'description' in request.data:
        # Update description if provided
        user_profile.description = request.data['description']

    if 'linkedin' in request.data:
        # Update linkedin if provided
        user_profile.linkedin = request.data['linkedin']

    if 'instagram' in request.data:
        # Update linkedin if provided
        user_profile.instagram = request.data['instagram']
        
    if 'facebook' in request.data:
        # Update linkedin if provided
        user_profile.facebook = request.data['facebook']
        
    if 'email' in request.data:
        # Update linkedin if provided
        user_profile.email = request.data['email']
    # Similar checks for other fields...

    serializer = UserProfileSerializer(user_profile, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)