from django.core.management.base import BaseCommand

from products.models import Product


PRODUCTS = [
    {
        "name": "Portrait Hoodie",
        "slug": "portrait-hoodie",
        "craft": "embroidery",
        "price": 3500,
        "description": (
            "A custom embroidered portrait made "
            "from your favourite photo."
        ),
        "badge": "Bestseller",
        "occasions": [
            "love",
            "parents",
            "graduation",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Handwriting Hoodie",
        "slug": "handwriting-hoodie",
        "craft": "embroidery",
        "price": 3200,
        "description": (
            "Their handwriting transformed into "
            "a personal embroidered keepsake."
        ),
        "badge": "",
        "occasions": [
            "love",
            "parents",
            "memory",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Couple Portrait Sweatshirt",
        "slug": "couple-portrait-sweatshirt",
        "craft": "embroidery",
        "price": 3800,
        "description": (
            "A custom embroidered portrait created "
            "especially for two."
        ),
        "badge": "",
        "occasions": [
            "love",
            "wedding",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Engraved Name Plaque",
        "slug": "engraved-name-plaque",
        "craft": "wood-leather",
        "price": 1800,
        "description": (
            "A personalised engraved plaque made "
            "to celebrate someone special."
        ),
        "badge": "",
        "occasions": [
            "parents",
            "graduation",
            "wedding",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Handwriting Keyring",
        "slug": "handwriting-keyring",
        "craft": "wood-leather",
        "price": 1200,
        "description": (
            "Keep a meaningful handwritten message "
            "close wherever you go."
        ),
        "badge": "",
        "occasions": [
            "love",
            "parents",
            "memory",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Wallet / Card Holder",
        "slug": "wallet-card-holder",
        "craft": "wood-leather",
        "price": 2200,
        "description": (
            "A practical leather keepsake personalised "
            "with your chosen detail."
        ),
        "badge": "",
        "occasions": [
            "love",
            "parents",
            "graduation",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Photo-engraved Necklace",
        "slug": "photo-engraved-necklace",
        "craft": "metal-jewelry",
        "price": 2500,
        "description": (
            "A photo engraved onto a wearable piece "
            "to keep someone close."
        ),
        "badge": "",
        "occasions": [
            "love",
            "parents",
            "memory",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Coordinates Bar",
        "slug": "coordinates-bar",
        "craft": "metal-jewelry",
        "price": 2000,
        "description": (
            "Carry the coordinates of a meaningful "
            "place wherever you go."
        ),
        "badge": "",
        "occasions": [
            "love",
            "wedding",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
    {
        "name": "Handwriting Pendant",
        "slug": "handwriting-pendant",
        "craft": "metal-jewelry",
        "price": 2400,
        "description": (
            "A handwritten message transformed into "
            "a timeless pendant."
        ),
        "badge": "",
        "occasions": [
            "love",
            "parents",
            "memory",
            "diaspora",
        ],
        "customizable": True,
        "stock_quantity": 0,
    },
]


class Command(BaseCommand):

    help = "Seed the KimCustoms product catalogue."

    def handle(self, *args, **options):

        for data in PRODUCTS:

            product, created = Product.objects.update_or_create(
                slug=data["slug"],
                defaults=data,
            )

            if created:
                self.stdout.write(
                    self.style.SUCCESS(
                        f"Created: {product.name}"
                    )
                )
            else:
                self.stdout.write(
                    self.style.WARNING(
                        f"Updated: {product.name}"
                    )
                )

        self.stdout.write(
            self.style.SUCCESS(
                "\nKimCustoms catalogue seeded successfully."
            )
        )