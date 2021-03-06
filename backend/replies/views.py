from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from .models import Reply
from .serializers import ReplySerializer
from comments.models import Comment

# Create your views here.


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def replies_to_comments(request, comment_id):
    if request.method == "GET":
        replies = Reply.objects.all()
        replies = Reply.objects.filter(comment_id=comment_id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        comment = get_object_or_404(Comment, pk=comment_id)
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, comment=comment)
            return Response(serializer.data)