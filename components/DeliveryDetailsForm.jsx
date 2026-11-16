"use client";

const DeliveryDetailsForm = ({ shipping, handleChange }) => {
  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "state",
      label: "State",
      type: "text",
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
      <h2 className="mb-6 text-xl font-bold">
        Delivery Information
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              value={shipping[field.name]}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Delivery Address
          </label>

          <textarea
            name="address"
            value={shipping.address}
            onChange={handleChange}
            required
            rows="4"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Enter your complete delivery address"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetailsForm;