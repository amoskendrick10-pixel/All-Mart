"use client";

import Link from "next/link";

import {LogOut, ShoppingCart} from "lucide-react";
  
import { useAuth } from "@/context/AuthContext";

import { useCart } from "@/context/CartContext";

export default function Navbar() {

  const { user, logout } = useAuth();

  const { itemCount } = useCart();

  return (

    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-black text-gray-900"
        >

          All<span className="text-blue-600">Mart</span>

        </Link>

        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>

          <Link href="/history" className="text-gray-600 hover:text-blue-600">
            My Orders
          </Link>

          <Link href="/wishlist" className="text-gray-600 hover:text-blue-600">
            Wishlist
          </Link>

        </div>

        <div className="flex items-center gap-4">

          <Link href="/cart" className="relative">
  <ShoppingCart size={24} />

          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
              {itemCount}
            </span>
          )}
          </Link>

          {user ? (

            <div className="flex items-center gap-2">

              <span className="hidden sm:block font-medium text-sm">
                Hi, {user.name.split(" ")[0]}
              </span>

              <button
                onClick={logout}
                className="p-2 rounded-xl border bg-red-600 text-white"
              >
                Logout
                <LogOut size={18} />
                
              </button>

            </div>

          ) : (

            <Link
              href="/signin"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl"
            >

              Sign In

            </Link>

          )}

        </div>

      </div>

    </nav>

  );

}