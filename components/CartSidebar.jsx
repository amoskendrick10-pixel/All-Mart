"use client"

import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/constants/mockData";
import CartItem from "./CartItem";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, subtotal } = useCart();
   
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100">


      <div
        className="absolute inset-0"
        onClick={onClose}
      />


      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white">

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold text-gray-900">
            Cart
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>


        <div className="flex-1 overflow-y-auto p-5">

          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Start shopping to add products to your cart.
              </p>

              <Link
                href="/"
                onClick={onClose}
                className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Start Shopping
              </Link>

            </div>
          ) : (
            <div className="space-y-5">

              {cart.map((item) => (
                <CartItem
                  key={`${item.vendorId}-${item.id}`}
                  item={item}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}

            </div>
          )}

        </div>

        {cart.length > 0 && (
          <div className="border-t p-5">

            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold text-gray-700">
                Subtotal
              </span>

              <span className="text-xl font-bold text-gray-900">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={onClose}
              className="mt-3 w-full py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Continue Shopping
            </button>

          </div>
        )}

      </aside>
    </div>
  );
};

export default CartSidebar;