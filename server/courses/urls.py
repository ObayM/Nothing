from django.urls import path
from . import views

urlpatterns = [
    path("course_card",views.course_card,name="course_card"),
    path("course_page",views.course_page,name="course_page"),
]