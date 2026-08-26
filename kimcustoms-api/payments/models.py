
from django.db import models

from orders.models import Order


class Payment(models.Model):

    class Method(models.TextChoices):
        MPESA = "mpesa", "M-Pesa"
        CARD = "card", "Card"
        CASH = "cash", "Cash on delivery"

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        PROCESSING = "processing", "Processing"
        COMPLETED = "completed", "Completed"
        FAILED = "failed", "Failed"
        REFUNDED = "refunded", "Refunded"

    order = models.ForeignKey(
        Order,
        on_delete=models.PROTECT,
        related_name="payments",
    )

    method = models.CharField(
        max_length=20,
        choices=Method.choices,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    transaction_reference = models.CharField(
        max_length=100,
        blank=True,
    )

    provider_reference = models.CharField(
        max_length=150,
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return f"{self.order.order_number} - {self.method}"