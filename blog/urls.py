"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.Articles.as_view(), name='index'),
    path('article/<int:article_id>', views.Article.as_view(), name='article'),
    path('create/article', views.ArticleCreate.as_view(), name='create_article'),
    path('edit/article/<int:article_id>',
         views.ArticleEdit.as_view(), name='edit_article'),
    path('admin/', admin.site.urls),
]
