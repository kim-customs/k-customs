from rest_framework import generics

from .serializers import OrderSerializer


class OrderCreateView(generics.CreateAPIView):

    serializer_class = OrderSerializer