"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import DeliveryDetailsForm from "@/components/DeliveryDetailsForm";
import OrderSummary from "@/components/OrderSummary";
import PaymentSelector from "@/components/PaymentSelector";
import DummyCardInput from "@/components/DummyCardInput";

const CheckoutPage = () => {
  const router = useRouter();

  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("card");

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

          <DeliveryDetailsForm
            shipping={shipping}
            handleChange={handleChange}
          />

          <PaymentSelector
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          {paymentMethod === "card" && <DummyCardInput />}

          <OrderSummary
            variant="checkout"
            cart={cart}
            subtotal={subtotal}
            shippingFee={shippingFee}
            total={total}
            loading={loading}
          />

        </form>

      </div>
    </main>
  );
};

export default CheckoutPage;