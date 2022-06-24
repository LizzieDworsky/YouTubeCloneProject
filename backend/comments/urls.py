from django.urls import path

from comments import views

urlpatterns = [
    path("", views.get_all_comments),
    path("<int:pk>/", views.comment_details),
    path("<video_id>/", views.get_all_video_comments),
    path("users/<video_id>/", views.user_comments),
]