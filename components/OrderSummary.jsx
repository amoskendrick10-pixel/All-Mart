import Link from "next/link";
import { formatPrice } from "@/constants/mockData";

const OrderSummary = ({
  subtotal,
  cart = [],
  shippingFee = 0,
  total,
  loading = false,
  variant = "cart",
}) => {

  if (variant === "cart") {
    return (
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
    );
  }


  return (
    <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={`${item.vendorId}-${item.id}`}
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
    </aside>
  );
};

export default OrderSummary;