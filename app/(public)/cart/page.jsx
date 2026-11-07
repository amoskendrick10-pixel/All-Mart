"use client";

import Link from "next/link";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/constants/mockData";


export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <ShoppingCart size={60} className="text-gray-300" />

        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          Your cart is empty
        </h1>

        <p className="mt-2 text-gray-500">
          You haven&apos;t added any products yet.
        </p>

        <Link
          href="/"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <section className="space-y-5 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border bg-white p-5 sm:flex-row"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-36 w-full rounded-xl object-cover sm:w-36"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm text-blue-600">
                      {item.vendorName}
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-semibold text-gray-800">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="rounded-lg border p-2 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="rounded-lg border p-2 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="mt-4 flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="mt-6 border-t pt-5">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>

            <p className="mt-4 text-center text-xs text-gray-500">
              Shipping costs will be added at checkout.
            </p>
          </aside>

        </div>
      </div>
    </main>
  );
}