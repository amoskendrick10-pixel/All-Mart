"use client"

import Link from "next/link";
import { LogOut, ShoppingCart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <Link
          href="/"
          className="text-2xl font-black text-gray-900"
        >
          AllMart
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/history"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            My Orders
          </Link>

          <Link
            href="/wishlist"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            Wishlist
          </Link>
        </div>

        <div className="flex items-center gap-4">

          <Link
            href="/cart"
            className="relative rounded-xl p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={24} />

            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-gray-700 sm:block">
                Hi, {user.name?.split(" ")[0] || "User"}
              </span>

              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Logout
                <LogOut size={17} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/signin"
                className="rounded-full px-4 py-2.5 text-sm font-semibold border text-gray-700 transition hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;