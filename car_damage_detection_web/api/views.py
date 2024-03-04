from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
#endpoint written here in views
def main(request):
    return HttpResponse("<h1>HELLO WORLD</h1>")
    
