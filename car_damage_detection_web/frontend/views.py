from django.shortcuts import render

# Create your views here.
def index1(request,*args,**kwargs):
    return render(request,"frontend/index.html")