"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/constants/mockData";

export default function WishlistPage() {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedWishlist = JSON.parse(
      localStorage.getItem("allmart_wishlist") || "{}"
    );

    setWishlist(savedWishlist[user.id] || []);
  }, [user]);

  const removeFromWishlist = (productId) => {
    const savedWishlist = JSON.parse(
      localStorage.getItem("allmart_wishlist") || "{}"
    );

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== productId
    );

    savedWishlist[user.id] = updatedWishlist;

    localStorage.setItem(
      "allmart_wishlist",
      JSON.stringify(savedWishlist)
    );

    setWishlist(updatedWishlist);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (

          <div className="rounded-2xl border bg-white p-12 text-center">

            <h2 className="text-xl font-bold text-gray-900">
              Your Wishlist is Empty
            </h2>

            <p className="mt-3 text-gray-500">
              Products you save will appear here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              Explore Products
            </Link>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="rounded-xl border bg-white p-5"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full rounded-lg object-cover"
                />

                <h2 className="mt-4 font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-2 font-semibold text-blue-600">
                  {formatPrice(product.price)}
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700"
                >
                  <Trash2 size={17} />
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}