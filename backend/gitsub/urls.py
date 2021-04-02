from django.urls import path

from . import views

urlpatterns = [
    #path('/', views.index, name='index'),
    path('<path:filedir_name>', views.projectfile, name='projectfile'),
]