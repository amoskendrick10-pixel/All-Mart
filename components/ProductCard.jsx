"use client";

import { ShoppingCartPlus, Heart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { formatPrice } from "@/constants/mockData";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const ProductCard = ({ product, vendor }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [saved, setSaved] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      vendorId: vendor.id,
      vendorName: vendor.name,
    });
  };

  const handleWishlist = () => {
    if (!user) {
      router.push("/signin");
      return;
    }

    const wishlist = JSON.parse(
      localStorage.getItem("allmart_wishlist") || "{}"
    );

    const userWishlist = wishlist[user.id] || [];

    const exists = userWishlist.some(
      (item) => item.id === product.id
    );

    const updatedWishlist = exists
      ? userWishlist.filter((item) => item.id !== product.id)
      : [...userWishlist, { ...product, vendor }];

    wishlist[user.id] = updatedWishlist;

    localStorage.setItem(
      "allmart_wishlist",
      JSON.stringify(wishlist)
    );

    setSaved(!exists);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative">
        <Image
          width={600}
          height={600}
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />

        
      </div>

      <div className="p-5">
        <p className="text-sm text-blue-600">
          {vendor?.name}
        </p>

        <h3 className="mt-2 font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">
          {formatPrice(product.price)}
        </p>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex flex-row justify-center items-center space-between">
          <button
          onClick={handleAddToCart}
          className="mt-4 flex items-center justify-center w-full gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <ShoppingCartPlus size={18} />
            Add to Cart
          </button>

          <button
            onClick={handleWishlist}
            className="flex items-end justify-end bg-gray-50 relative"
            aria-label="Toggle wishlist"
          >
            <Heart
              size={26}
              className={
                saved
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;