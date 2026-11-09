"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

import { vendors, categories } from "@/constants/mockData";
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

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-gray-900 px-8 py-16 text-white md:px-16">
          <div className="max-w-2xl">
            <p className="mb-4 font-semibold text-blue-400">
              WELCOME TO ALLMART
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Everything You Need,
              <span className="text-blue-400">
                {" "}All in One Place.
              </span>
            </h1>

            <p className="mt-6 text-gray-300">
              Discover amazing products from different vendors.
              Shop smarter, shop easier with AllMart.
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Start Shopping
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-4 shadow-sm">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search for products, brands and categories"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-gray-800 outline-none"
          />
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Shop by Category
        </h2>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>


      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Products
          </h2>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="py-12 text-center text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <ProductCard
                key={`${item.vendor.id}-${item.id}`}
                product={item}
                vendor={item.vendor}
              />
            ))}
          </div>
        )}
      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Explore Our Stores
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {vendors.map((vendor) => (
            <Link
              href={`/store/${vendor.id}`}
              key={vendor.id}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-medium text-blue-600">
                {vendor.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {vendor.name}
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {vendor.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600">
                Visit Store
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
};

export default HomePage;