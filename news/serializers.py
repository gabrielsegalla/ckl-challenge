from rest_framework import serializers
from news.models import News, Category


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'url', 'name', 'hex_color')

class NewsSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_hex_color = serializers.CharField(source='category.hex_color', read_only=True)

    class Meta:
        model = News
        fields = ('id','title','description','author','image_url', 'category','category_name','category_hex_color')
