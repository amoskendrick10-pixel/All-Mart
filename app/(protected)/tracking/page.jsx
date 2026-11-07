"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";
import {Package, Truck, CheckCircle, Clock, ArrowLeft} from "lucide-react";
  

const statuses = ["Processing", "Shipped", "Delivered"];

export default function TrackingPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const { user } = useAuth();
  const router = useRouter();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const orders = JSON.parse(
      localStorage.getItem("allmart_orders") || "[]"
    );

    const foundOrder = orders.find(
      (item) =>
        item.id === orderId && item.userId === user.id
    );

    setOrder(foundOrder || null);
    setLoading(false);
  }, [orderId, user]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading order details...</p>
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

  const statusIcons = [
    <Clock key="processing" size={22} />,
    <Truck key="shipped" size={22} />,
    <CheckCircle key="delivered" size={22} />,
  ];

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

          {/* ORDER PROGRESS */}

          <section className="mt-10">
            <h2 className="mb-8 text-lg font-bold">
              Delivery Progress
            </h2>

            <div className="space-y-8">
              {statuses.map((status, index) => {
                const completed = index <= currentStatus;

                return (
                  <div key={status} className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                        completed
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {statusIcons[index]}
                    </div>

                    <div>
                      <h3
                        className={`font-semibold ${
                          completed
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {status}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {index === 0 &&
                          "Your order has been received and is being processed."}

                        {index === 1 &&
                          "Your order has been shipped and is on its way."}

                        {index === 2 &&
                          "Your order has been delivered successfully."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ORDER DETAILS */}

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
}