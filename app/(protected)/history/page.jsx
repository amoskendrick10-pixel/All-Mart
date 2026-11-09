"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";

const HistoryPage = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedOrders = JSON.parse(
      localStorage.getItem("allmart_orders") || "[]"
    );

    const userOrders = savedOrders.filter(
      (order) => order.userId === user.id
    );

    setOrders(userOrders);
  }, [user]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="rounded-2xl border bg-white p-12 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              No Orders Yet
            </h2>

            <p className="mt-3 text-gray-500">
              Your previous orders will appear here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>

                    <h2 className="font-bold text-gray-900">
                      #{order.id}
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Order Date
                    </p>

                    <p className="font-medium">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Status
                    </p>

                    <span className="font-semibold text-blue-600">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
                  <p className="font-bold text-gray-900">
                    {formatPrice(order.total)}
                  </p>

                  <Link
                    href={`/tracking?orderId=${order.id}`}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default HistoryPage;