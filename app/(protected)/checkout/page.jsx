"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, clearCart } = useCart();
  const { user } = useAuth();

  const shippingFee = 2500;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + shippingFee;

  const [shipping, setShipping] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setLoading(true);

    // Simulated payment
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        userId: user.id,
        items: cart,
        subtotal,
        shippingFee,
        total,
        shipping,
        status: "Processing",
        date: new Date().toISOString(),
      };

      const existingOrders = JSON.parse(
        localStorage.getItem("allmart_orders") || "[]"
      );

      localStorage.setItem(
        "allmart_orders",
        JSON.stringify([...existingOrders, order])
      );

      clearCart();

      router.push(`/tracking?orderId=${order.id}`);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <ShoppingBag size={60} className="text-gray-300" />

        <h1 className="mt-5 text-2xl font-bold">
          Your cart is empty
        </h1>

        <Link
          href="/"
          className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-white"
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
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Checkout
        </h1>

        <form
          onSubmit={handleCheckout}
          className="grid gap-8 lg:grid-cols-3"
        >

          {/* DELIVERY INFORMATION */}

          <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">

            <h2 className="mb-6 text-xl font-bold">
              Delivery Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  name: "fullName",
                  label: "Full Name",
                  type: "text",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  type: "tel",
                },
                {
                  name: "city",
                  label: "City",
                  type: "text",
                },
                {
                  name: "state",
                  label: "State",
                  type: "text",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={shipping[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Delivery Address
                </label>

                <textarea
                  name="address"
                  value={shipping.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder="Enter your complete delivery address"
                />
              </div>

            </div>

          </section>

          {/* ORDER SUMMARY */}

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t pt-5">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping Fee</span>
                <span>{formatPrice(shippingFee)}</span>
              </div>

              <div className="flex justify-between border-t pt-4 text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing..." : "Complete Order"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Demo checkout only. No real payment is made.
            </p>

          </aside>

        </form>

      </div>
    </main>
  );
}