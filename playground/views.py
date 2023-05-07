from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def watcha_bolo(request):
    return HttpResponse('mega mega megalit, megalit megalit')

def hello(request):
    x=1
    y=2
    return render(request, 'hello.html', {'name': 'levi'})