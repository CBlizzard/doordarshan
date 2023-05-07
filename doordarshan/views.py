from django.shortcuts import render
from django.http import HttpResponse

def vid(request):
    return render(request, 'start.html')