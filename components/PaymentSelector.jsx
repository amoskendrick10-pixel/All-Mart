"use client";

const PaymentSelector = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Payment Method
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setPaymentMethod("card")}
          className={`rounded-lg border px-4 py-3 font-semibold transition ${
            paymentMethod === "card"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-blue-600"
          }`}
        >
          Card
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("delivery")}
          className={`rounded-lg border px-4 py-3 font-semibold transition ${
            paymentMethod === "delivery"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-blue-600"
          }`}
        >
          Pay on Delivery
        </button>
      </div>
    </section>
  );
};

export default PaymentSelector;