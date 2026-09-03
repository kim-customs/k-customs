from rest_framework import generics

from .models import Product
from .serializers import ProductSerializer


class ProductListView(generics.ListAPIView):

    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = (
            Product.objects
            .filter(is_active=True)
            .prefetch_related("images")
        )

        craft = self.request.query_params.get("craft")

        if craft:
            queryset = queryset.filter(craft=craft)

        return queryset


class ProductDetailView(generics.RetrieveAPIView):

    serializer_class = ProductSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return (
            Product.objects
            .filter(is_active=True)
            .prefetch_related("images")
        )