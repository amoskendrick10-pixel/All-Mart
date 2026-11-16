"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, ShoppingCart, Menu, X, Heart, ClipboardList, Home } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">


          <Link href="/" className="text-2xl font-black text-gray-900">
            AllMart
          </Link>


          <div className="hidden items-center gap-8 md:flex">
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


          <div className="flex items-center gap-3">


            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-xl p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Open shopping cart"
            >
              <ShoppingCart size={24} />

              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>


            {user ? (
              <div className="hidden items-center gap-3 sm:flex">
                <span className="text-sm font-medium text-gray-700">
                  Hi, {user.name?.split(" ")[0] || "User"}
                </span>

                <button
                  onClick={logout}
                  className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Logout
                  <LogOut size={17} />
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href="/signin"
                  className="rounded-full border px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}


            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              aria-label="Open navigation sidebar"
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </nav>


      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />


      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-60 md:hidden ${
          sidebarOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />


      <aside
        className={`fixed right-0 top-0 z-70 flex h-full w-80 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!sidebarOpen}
      >

        <div className="flex items-center justify-between border-b border-gray-200 p-5">

          <button
            onClick={closeSidebar}
            className=" flex items-end justify-end rounded-lg p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>


        <div className="flex-1 space-y-2 p-5">
          <Link
            href="/"
            onClick={closeSidebar}
            className="flex items-center gap-4 rounded-lg p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            href="/history"
            onClick={closeSidebar}
            className="flex items-center gap-4 rounded-lg p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <ClipboardList size={20} />
            My Orders
          </Link>

          <Link
            href="/wishlist"
            onClick={closeSidebar}
            className="flex items-center gap-4 rounded-lg p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <Heart size={20} />
            Wishlist
          </Link>

          <button
            onClick={() => {
              closeSidebar();
              setCartOpen(true);
            }}
            className="flex w-full items-center gap-4 rounded-lg p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <ShoppingCart size={20} />
            Cart

            {itemCount > 0 && (
              <span className="ml-auto rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>


        <div className="border-t border-gray-200 p-5">
          {user ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700">
                Hi, {user.name?.split(" ")[0] || "User"}
              </p>

              <button
                onClick={() => {
                  logout();
                  closeSidebar();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
              >
                Logout
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <Link
                href="/signin"
                onClick={closeSidebar}
                className="block rounded-lg border px-4 py-3 text-center font-semibold text-gray-700 hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeSidebar}
                className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Navbar;