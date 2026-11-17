"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";
import { Package, ArrowLeft } from "lucide-react";
import TrackingStepper from "@/components/TrackingStepper";

const statuses = ["Processing", "Shipped", "Delivered"];

const TrackingPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const { user } = useAuth();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!user) return;

    const orders = JSON.parse(
      localStorage.getItem("allmart_orders") || "[]"
    );

    const foundOrder = orders.find(
      (item) => item.id === orderId && item.userId === user.id
    );

    setOrder(foundOrder || null);
    setLoading(false);
  }, [orderId, user]);


  useEffect(() => {
    if (!order) return;

    const currentIndex = statuses.indexOf(order.status);


    if (currentIndex === -1 || currentIndex >= statuses.length - 1) {
      return;
    }

    const timer = setTimeout(() => {
      const nextStatus = statuses[currentIndex + 1];

      const updatedOrder = {
        ...order,
        status: nextStatus,
      };


      setOrder(updatedOrder);

 
      const orders = JSON.parse(
        localStorage.getItem("allmart_orders") || "[]"
      );

      const updatedOrders = orders.map((item) =>
        item.id === order.id && item.userId === user.id
          ? updatedOrder
          : item
      );

      localStorage.setItem(
        "allmart_orders",
        JSON.stringify(updatedOrders)
      );
    }, 5000);


    return () => clearTimeout(timer);
  }, [order, user]);

  if (loading) {
    return (
      <main>
        <p>Loading order details...</p>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <Package size={55} className="text-gray-300" />

        <h1 className="mt-5 text-2xl font-bold">
          Order not found
        </h1>

        <p className="mt-2 text-gray-500">
          We couldn&apos;t find this order in your account.
        </p>

        <Link
          href="/history"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          View Order History
        </Link>
      </main>
    );
  }

  const currentStatus = statuses.indexOf(order.status);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/history"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Orders
        </Link>

        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Track Your Order
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Order ID: {order.id}
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {order.status}
            </span>
          </div>

          <TrackingStepper
            statuses={statuses}
            currentStatus={currentStatus}
          />


          <section className="mt-10 border-t pt-8">
            <h2 className="mb-5 text-lg font-bold">
              Order Details
            </h2>

            <div className="space-y-5">
              {order.items.map((item, index) => (
                <div
                  key={`${item.vendorId || item.vendorName}-${item.id}-${index}`}
                  className="flex items-center justify-between gap-4"
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

            <div className="mt-6 flex justify-between border-t pt-5 text-lg font-bold">
              <span>Total Paid (Demo)</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TrackingPage;