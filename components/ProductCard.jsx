"use client";

import { ShoppingCartPlus } from "lucide-react";
import Image from "next/image";

import { formatPrice } from "@/constants/mockData";
import { useCart } from "@/context/CartContext";
import FavoriteButton from "@/components/FavoriteButton";

const ProductCard = ({ product, vendor }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      vendorId: vendor.id,
      vendorName: vendor.name,
    });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white py-2 px-2">
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

        <div className="relative">
          <FavoriteButton product={product} />
        </div>

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

        <button
          onClick={handleAddToCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <ShoppingCartPlus size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;