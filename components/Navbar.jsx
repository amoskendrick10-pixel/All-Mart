"use client";

import Link from "next/link";

import {
  ShoppingBag,
  UserRound,
  LogOut
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import { useCart } from "@/context/CartContext";

export default function Navbar() {

  const { user, logout } = useAuth();

  const { itemCount } = useCart();

  return (

    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-black text-gray-900"
        >

          All<span className="text-blue-600">Mart</span>

        </Link>

        {/* NAVIGATION */}

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

        {/* ACTIONS */}

        <div className="flex items-center gap-4">

          <Link
            href="/cart"
            className="relative p-2 bg-gray-100 rounded-xl"
          >

            <ShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

              {itemCount}

            </span>

          </Link>

          {user ? (

            <div className="flex items-center gap-2">

              <span className="hidden sm:block font-medium text-sm">
                Hi, {user.name.split(" ")[0]}
              </span>

              <button
                onClick={logout}
                className="p-2 rounded-xl border"
              >

                <LogOut size={18} />

              </button>

            </div>

          ) : (

            <Link
              href="/signin"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl"
            >

              <UserRound size={18} />

              Sign In

            </Link>

          )}

        </div>

      </div>

    </nav>

  );

}