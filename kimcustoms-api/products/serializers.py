from rest_framework import serializers

from .models import Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(
        read_only=True,
    )

    class Meta:
        model = ProductImage

        fields = (
            "id",
            "image",
            "alt_text",
            "is_primary",
        )


class ProductSerializer(serializers.ModelSerializer):

    images = ProductImageSerializer(
        many=True,
        read_only=True,
    )

    primary_image = serializers.SerializerMethodField()

    class Meta:
        model = Product

        fields = (
            "id",
            "name",
            "slug",
            "craft",
            "description",
            "price",
            "badge",
            "occasions",
            "customizable",
            "stock_quantity",
            "is_active",
            "images",
            "primary_image",
            "created_at",
            "updated_at",
        )

    def get_primary_image(self, obj):
        image = obj.images.filter(
            is_primary=True
        ).first()

        if not image:
            image = obj.images.first()

        if not image:
            return None

        request = self.context.get("request")

        if request:
            return request.build_absolute_uri(
                image.image.url
            )

        return image.image.url