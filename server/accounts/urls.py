from django.urls import path

from . import views

urlpatterns = [
    path('signup', views.signup, name="signup"),
    path('login', views.login, name="login"),
    path('auth_token', views.auth_token, name="auth_token"),
]