from django.db import models
from django.contrib.auth.models import User
import hashlib
# Create your models here.
from django.contrib.auth.models import AbstractUser, Group, Permission




class UserProfile(models.Model):
    id=models.CharField(max_length=100,primary_key=True)
    name = models.CharField(max_length=100,default="UNONw")
    description = models.TextField(blank=True, default='')
    linkedin = models.URLField(blank=True, default='')
    instagram = models.URLField(blank=True, default='')
    facebook = models.URLField(blank=True, default='')
    email = models.EmailField(blank=True, default='')
    photo = models.ImageField(upload_to='profile_photos/', blank=True)

class Image(models.Model):
    id=models.CharField(max_length=100,primary_key=True)
    owner_address = models.CharField(max_length=100,default='')
    photo = models.ImageField(upload_to='upload_images/',blank=True)
    
    
class ImagePost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    hash_value = models.CharField(max_length=64, unique=True, editable=False)

    def save(self, *args, **kwargs):
        # Generate hash value for the image
        if not self.hash_value:
            self.hash_value = self.generate_hash()
        super().save(*args, **kwargs)

    def generate_hash(self):
        # Calculate the hash value of the image using SHA-256
        image_hash = hashlib.sha256()
        for chunk in self.image.chunks():
            image_hash.update(chunk)
        return image_hash.hexdigest()

    def __str__(self):
        return f"Image Post by {self.user.username}"




class User(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    # Use custom related names to avoid clashes
    groups = models.ManyToManyField(Group, related_name='custom_user_groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions', blank=True)



class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_date = models.DateTimeField(auto_now_add=True)
    review = models.TextField()

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating_value = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

class ChatForum(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.title

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)
    message = models.TextField()



