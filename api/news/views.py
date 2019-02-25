from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.decorators import permission_classes
from news.models import News, Category
from rest_framework.response import Response
from news.serializers import NewsSerializer, CategoriesSerializer
from rest_framework.permissions import AllowAny


@permission_classes((AllowAny,))
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def list(self, request, pk=None):
        queryset = News.objects.all()
        if self.request.user.id:
            interests = self.request.user.interests.all()
            id_list = []
            for interest in interests:
                id_list.append(interest.id)
            queryset = News.objects.filter(category__in=id_list)
            serializer = NewsSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            queryset = News.objects.all()
            serializer = NewsSerializer(queryset, many=True)
            return Response(serializer.data)


class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
