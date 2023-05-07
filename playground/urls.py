from django.urls import path
from . import views

urlpatterns = [
    path('watcha/', views.watcha_bolo),
    path('hello/', views.hello )
]