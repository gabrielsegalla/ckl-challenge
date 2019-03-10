from rest_framework import viewsets
from authentication.models import User
from authentication.serializers import UserSerializer


class UsersWithInterestsViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 