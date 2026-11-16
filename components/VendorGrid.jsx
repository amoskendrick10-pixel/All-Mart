import VendorCard from "@/components/VendorCard";

const VendorGrid = ({ vendors }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Explore Our Stores
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
};

export default VendorGrid;