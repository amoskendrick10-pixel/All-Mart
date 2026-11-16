"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import OrderHistoryList from "@/components/OrderHistoryList";

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

        <OrderHistoryList orders={orders} />
      </div>
    </main>
  );
};

export default HistoryPage;