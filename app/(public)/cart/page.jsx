"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/constants/mockData";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";

const CartPage = () => {
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

          <section className="space-y-5 lg:col-span-2">
            {cart.map((item) => (
              <CartItem
                key={`${item.vendorId}-${item.id}`}
                item={item}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </section>

          <OrderSummary subtotal={subtotal} />

        </div>
      </div>
    </main>
  );
};

export default CartPage;