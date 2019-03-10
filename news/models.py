from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    hex_color = models.CharField(max_length=8)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=50)
    image_url = models.URLField()

    def __str__(self):
        return self.name


class News(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    image_url = models.URLField()

    def __str__(self):
        return self.title
