"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const WishlistButton = ({ product }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user || !product) {
      setSaved(false);
      return;
    }

    const wishlist = JSON.parse(
      localStorage.getItem("allmart_wishlist") || "{}"
    );

    const userWishlist = wishlist[user.id] || [];

    setSaved(
      userWishlist.some((item) => item.id === product.id)
    );
  }, [user, product]);

  const toggleWishlist = () => {
    if (!user) {
      router.push("/signin");
      return;
    }

    if (!product) return;

    const wishlist = JSON.parse(
      localStorage.getItem("allmart_wishlist") || "{}"
    );

    const userWishlist = wishlist[user.id] || [];

    let updatedWishlist;

    if (userWishlist.some((item) => item.id === product.id)) {
      updatedWishlist = userWishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [...userWishlist, product];
    }

    wishlist[user.id] = updatedWishlist;

    localStorage.setItem(
      "allmart_wishlist",
      JSON.stringify(wishlist)
    );

    setSaved(
      updatedWishlist.some((item) => item.id === product.id)
    );
  };

  return (
    <button
      type="button"
      onClick={toggleWishlist}
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      className="flex h-10 w-10 items-center justify-center rounded-full border bg-white transition hover:bg-gray-100"
    >
      <Heart
        size={20}
        className={
          saved
            ? "fill-red-500 text-red-500"
            : "text-gray-500"
        }
      />
    </button>
  );
};

export default WishlistButton;