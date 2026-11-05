"use client";

import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/constants/mockData";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Your cart is empty
        </h1>

        <p className="mt-3 text-gray-500">
          You havent added any products yet.
        </p>

        <Link
          href="/"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Start Shopping
        </Link>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <div className="space-y-5">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex flex-col justify-between gap-5 rounded-xl border bg-white p-5 sm:flex-row sm:items-center"
            >

              <div>
                <h2 className="font-bold text-gray-900">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {item.vendorName}
                </p>

                <p className="mt-2 font-semibold text-blue-600">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center gap-4">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="rounded-lg border p-2"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="rounded-lg border p-2"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-3 text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-8 rounded-xl border bg-white p-6">

          <div className="flex justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Shipping and other charges will be calculated at checkout.
          </p>

          <Link
            href="/checkout"
            className="mt-6 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </main>
  );
}