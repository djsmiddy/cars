from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login/login/')


## Home page

def home(request):

    return render(request, 'garage/index.html')

def getAddCarForm(request):

    return render(request, 'garage/addCar.html')