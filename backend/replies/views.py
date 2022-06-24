from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from .models import Reply
from .serializers import ReplySerializer

# Create your views here.


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def replies_to_comments(request, comment_id):
    replies = Reply.objects.all()
    replies = Reply.objects.filter(comment_id=comment_id)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)