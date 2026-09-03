from django.contrib import admin
from django.utils.html import format_html

from .models import Product, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = (
        "image",
        "image_preview",
        "alt_text",
        "is_primary",
    )
    readonly_fields = ("image_preview",)

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="100" height="100" '
                'style="object-fit: contain; border-radius: 8px; '
                'background: #fff; border: 1px solid #eee;" />',
                obj.image.url,
            )

        return "No image"

    image_preview.short_description = "Preview"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "craft",
        "price",
        "stock_quantity",
        "is_active",
        "created_at",
    )

    list_filter = (
        "craft",
        "is_active",
        "customizable",
        "created_at",
    )

    search_fields = (
        "name",
        "description",
        "slug",
    )

    prepopulated_fields = {
        "slug": ("name",),
    }

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Product Information",
            {
                "fields": (
                    "name",
                    "slug",
                    "craft",
                    "description",
                )
            },
        ),
        (
            "Pricing & Inventory",
            {
                "fields": (
                    "price",
                    "stock_quantity",
                )
            },
        ),
        (
            "Catalogue",
            {
                "fields": (
                    "badge",
                    "occasions",
                    "customizable",
                    "is_active",
                )
            },
        ),
        (
            "Timestamps",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    inlines = [
        ProductImageInline,
    ]


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = (
        "product",
        "image_preview",
        "is_primary",
        "created_at",
    )

    list_filter = (
        "is_primary",
        "created_at",
    )

    search_fields = (
        "product__name",
        "alt_text",
    )

    list_select_related = (
        "product",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
    )

    fields = (
        "product",
        "image",
        "image_preview",
        "alt_text",
        "is_primary",
        "created_at",
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="120" height="120" '
                'style="object-fit: contain; border-radius: 8px; '
                'background: #fff; border: 1px solid #eee;" />',
                obj.image.url,
            )

        return "No image"

    image_preview.short_description = "Preview"