"use client";

import { useState } from "react";

import { vendors, categories } from "@/constants/mockData";

import SearchInput from "@/components/SearchInput";
import CategoryTabs from "@/components/CategoryTabs";
import HeroSection from "@/components/HeroSection";
import VendorGrid from "@/components/VendorGrid";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProducts = vendors.flatMap((vendor) =>
    vendor.products.map((product) => ({
      ...product,
      vendor,
    }))
  );

  const filteredProducts = allProducts.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.vendor?.name?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.vendor?.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />

      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <VendorGrid vendors={vendors} />


      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Explore All Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                vendor={item.vendor}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;