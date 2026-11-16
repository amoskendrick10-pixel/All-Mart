"use client";

import { useParams } from "next/navigation";

import { vendors } from "@/constants/mockData";
import StoreBanner from "@/components/StoreBanner";
import ProductGrid from "@/components/ProductGrid";

const StorePage = () => {
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
      <StoreBanner vendor={vendor} />

      <ProductGrid vendor={vendor} />
    </main>
  );
};

export default StorePage;