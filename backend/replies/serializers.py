from dataclasses import fields
from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ["id", "text", "user_id", "comment"]
        depth = 1