"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { vendors } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";

export default function StorePage() {
  const params = useParams();

  const vendor = vendors.find(
    (item) => String(item.id) === String(params.id)
  );

  if (!vendor) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Store not found.
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-gray-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="text-sm text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-semibold text-blue-400">
            {vendor.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {vendor.name}
          </h1>

          <p className="mt-4 max-w-xl text-gray-300">
            {vendor.description}
          </p>

        </div>
      </section>

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

    </main>
  );
}