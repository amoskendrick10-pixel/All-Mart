


const DummyCardInput = () => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Card Details
      </h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Cardholder Name
          </label>

          <input
            type="text"
            placeholder="Enter cardholder name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Card Number
          </label>

          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Expiry Date
            </label>

            <input
              type="text"
              placeholder="MM/YY"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              CVV
            </label>

            <input
              type="password"
              placeholder="***"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Demo interface only. Do not enter real payment details.
      </p>
    </section>
  );
};

export default DummyCardInput;