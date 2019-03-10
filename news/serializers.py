from rest_framework import serializers
from news.models import News, Category, Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('__all__')
        

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')


class NewsSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(), source='author', write_only=True
    )
    category= CategoriesSerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    class Meta:
        model = News
        fields = ('id','title','description', 'image_url','category','category_id','author','author_id')