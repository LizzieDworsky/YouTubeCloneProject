from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "video_id", "text", "likes", "dislikes", "user_id"]
        depth = 1