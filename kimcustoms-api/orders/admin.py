from django.contrib import admin

from .models import (
    Order,
    OrderItem,
    Customization,
)


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = (
        "product_name",
        "unit_price",
        "subtotal",
    )


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):

    list_display = (
        "order_number",
        "customer",
        "status",
        "total",
        "created_at",
    )

    list_filter = (
        "status",
        "created_at",
    )

    search_fields = (
        "order_number",
        "customer__first_name",
        "customer__last_name",
        "customer__email",
    )

    readonly_fields = (
        "order_number",
        "subtotal",
        "delivery_fee",
        "total",
        "created_at",
        "updated_at",
    )

    inlines = [
        OrderItemInline,
    ]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):

    list_display = (
        "order",
        "product_name",
        "quantity",
        "unit_price",
        "subtotal",
    )

    search_fields = (
        "order__order_number",
        "product_name",
    )


@admin.register(Customization)
class CustomizationAdmin(admin.ModelAdmin):

    list_display = (
        "order_item",
        "created_at",
    )

    search_fields = (
        "order_item__order__order_number",
        "personalization",
    )