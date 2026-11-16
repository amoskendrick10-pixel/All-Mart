import Link from "next/link";
import OrderHistoryCard from "./OrderHistoryCard";

const OrderHistoryList = ({ orders }) => {
  if (orders.length === 0) {
    return (
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
    );
  }

  return (
    <div className="space-y-5">
      {orders.map((order) => (
        <OrderHistoryCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};

export default OrderHistoryList;