from django.urls import path

from comments import views

urlpatterns = [
    path("", views.get_all_comments),
    path("<video_id>/", views.get_all_video_comments),
]