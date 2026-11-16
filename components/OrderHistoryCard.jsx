import Link from "next/link";
import { formatPrice } from "@/constants/mockData";

const OrderHistoryCard = ({ order }) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>

          <h2 className="font-bold text-gray-900">
            #{order.id}
          </h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Order Date</p>

          <p className="font-medium">
            {new Date(order.date).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>

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
  );
};

export default OrderHistoryCard;