from django.urls import path

from replies import views

urlpatterns = [
    path("<int:comment_id>/", views.replies_to_comments),
]