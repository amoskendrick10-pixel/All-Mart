"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import FavoritesGrid from "@/components/FavoritesGrid";

const WishlistPage = () => {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedWishlist = JSON.parse(
      localStorage.getItem("allmart_favorites") || "{}"
    );

    setWishlist(savedWishlist[user.id] || []);
  }, [user]);

  const removeFromWishlist = (productId) => {
    const savedWishlist = JSON.parse(
      localStorage.getItem("allmart_favorites") || "{}"
    );

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== productId
    );

    savedWishlist[user.id] = updatedWishlist;

    localStorage.setItem(
      "allmart_favorites",
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

        <FavoritesGrid
          wishlist={wishlist}
          onRemove={removeFromWishlist}
        />
      </div>
    </main>
  );
};

export default WishlistPage;