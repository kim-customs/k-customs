"use client";

import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

import {
  FiCheck,
  FiHeart,
  FiUpload,
  FiX,
} from "react-icons/fi";

import type { Product } from "@/features/products/data/products";

interface CustomizationFormProps {
  product: Product;
}

export default function CustomizationForm({
  product,
}: CustomizationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [quantity, setQuantity] =
    useState(1);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setFileName(file.name);
  };

  const removeFile = () => {
    setFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form className="kc-customization-form">

      {/* Personalization */}
      <div className="kc-form-section">

        <div className="kc-form-heading">
          <span className="kc-form-step">
            1
          </span>

          <div>
            <h2>
              Make it personal
            </h2>

            <p>
              Tell us what you'd like us
              to create.
            </p>
          </div>
        </div>

        <label
          htmlFor="personalization"
          className="kc-form-label"
        >
          Personalization
        </label>

        <textarea
          id="personalization"
          name="personalization"
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder={
            "e.g. Add the name 'Mum' and the date 12.08.2026..."
          }
          rows={4}
        />

        <span className="kc-form-hint">
          Include names, dates, handwriting,
          coordinates or any other details
          relevant to your design.
        </span>
      </div>

      {/* Upload */}
      <div className="kc-form-section">

        <div className="kc-form-heading">
          <span className="kc-form-step">
            2
          </span>

          <div>
            <h2>
              Upload your photo
            </h2>

            <p>
              Use a clear, high-quality image
              where possible.
            </p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          id="product-image"
          name="product-image"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          hidden
        />

        {!fileName ? (
          <button
            type="button"
            className="kc-upload-box"
            onClick={() =>
              fileInputRef.current?.click()
            }
          >
            <span className="kc-upload-icon">
              <FiUpload size={22} />
            </span>

            <strong>
              Upload your photo
            </strong>

            <span>
              JPG, PNG or WebP
            </span>
          </button>
        ) : (
          <div className="kc-uploaded-file">

            <div>
              <FiCheck size={18} />

              <span>
                {fileName}
              </span>
            </div>

            <button
              type="button"
              onClick={removeFile}
              aria-label="Remove uploaded image"
            >
              <FiX size={17} />
            </button>
          </div>
        )}
      </div>

      {/* Quantity */}
      <div className="kc-form-section">

        <div className="kc-form-heading">
          <span className="kc-form-step">
            3
          </span>

          <div>
            <h2>
              Quantity
            </h2>

            <p>
              How many would you like?
            </p>
          </div>
        </div>

        <div className="kc-quantity">

          <button
            type="button"
            onClick={() =>
              setQuantity(
                Math.max(1, quantity - 1)
              )
            }
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>
            {quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              setQuantity(quantity + 1)
            }
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>
      </div>

      {/* Add to cart */}
      <div className="kc-add-to-cart-area">

        <div className="kc-total">

          <span>
            Total
          </span>

          <strong>
            KSh{" "}
            {(
              product.price * quantity
            ).toLocaleString("en-KE")}
          </strong>

        </div>

        <button
          type="button"
          className="kc-btn kc-btn-rose kc-add-to-cart"
          onClick={() => {
            console.log({
              product,
              quantity,
              personalization: message,
              fileName,
            });
          }}
        >
          Add to cart
        </button>

        <button
          type="button"
          className="kc-wishlist"
          aria-label="Add to wishlist"
        >
          <FiHeart size={18} />
        </button>

      </div>

      <p className="kc-customization-note">
        Your uploaded photo and personalization
        details will be securely attached to
        your order during checkout.
      </p>

    </form>
  );
}
