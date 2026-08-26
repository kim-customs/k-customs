from django.contrib import admin

from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):

    list_display = (
        "order",
        "method",
        "status",
        "amount",
        "transaction_reference",
        "created_at",
    )

    list_filter = (
        "method",
        "status",
        "created_at",
    )

    search_fields = (
        "order__order_number",
        "transaction_reference",
        "provider_reference",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )