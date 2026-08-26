from django.db import models


class Product(models.Model):

    class Craft(models.TextChoices):
        EMBROIDERY = "embroidery", "Embroidery"
        WOOD_LEATHER = "wood-leather", "Wood & Leather"
        METAL_JEWELRY = "metal-jewelry", "Metal Jewelry"

    name = models.CharField(
        max_length=200,
    )

    slug = models.SlugField(
        max_length=220,
        unique=True,
    )

    craft = models.CharField(
    max_length=30,
    choices=Craft.choices,
    null=True,
    blank=True,
    )

    description = models.TextField(
        blank=True,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    badge = models.CharField(
        max_length=50,
        blank=True,
    )

    occasions = models.JSONField(
        default=list,
        blank=True,
    )

    customizable = models.BooleanField(
        default=True,
    )

    stock_quantity = models.PositiveIntegerField(
        default=0,
    )

    is_active = models.BooleanField(
        default=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name

class ProductImage(models.Model):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="images",
    )

    image = models.ImageField(
        upload_to="products/",
    )

    alt_text = models.CharField(
        max_length=255,
        blank=True,
    )

    is_primary = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ["-is_primary", "created_at"]

    def __str__(self):
        return f"{self.product.name} image"