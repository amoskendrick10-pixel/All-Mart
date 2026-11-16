import ProductCard from "@/components/ProductCard";

const ProductGrid = ({ vendor }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Products from {vendor.name}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vendor.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            vendor={vendor}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;