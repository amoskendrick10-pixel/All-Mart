"use client"

import { Plus, Minus, Trash2 } from "lucide-react";
import { formatPrice } from "@/constants/mockData";
import Image from "next/image";

const CartItem = ({ item, onIncrease, onDecrease, onRemove}) => {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl border bg-white p-5 sm:flex-row"
    >
      <Image
        width={600}
        height={600}
        src={item.image}
        alt={item.name}
        className="h-36 w-full rounded-xl object-cover sm:w-36"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm text-blue-600">
            {item.vendorName}
          </p>

          <h2 className="mt-1 text-lg font-bold text-gray-900">
            {item.name}
          </h2>

          <p className="mt-2 font-semibold text-gray-800">
            {formatPrice(item.price)}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onDecrease}
              className="rounded-lg border p-2 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>

            <span className="font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={onIncrease}
              className="rounded-lg border p-2 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={onRemove}
            className="flex items-center gap-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;