from django.urls import path

from comments import views

urlpatterns = [
    path("", views.get_all_comments),
    path("<str:video_id>/", views.get_all_video_comments),
    path("comment/<int:pk>/", views.comment_details),
    path("users/<str:video_id>/", views.user_comments),
]