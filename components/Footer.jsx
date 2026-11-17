import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">


          <div>
            <h2 className="text-2xl font-bold text-white">
              AllMart
            </h2>

            <p className="mt-3">
              Everything you need, all in one place.
            </p>

            <p className="mt-3">
              Freedom to order anything. When you want it.
            </p>

            <p className="mt-3">
              We are very reliable. And we always make sure your
              products are well taken care of.
            </p>
          </div>


          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/history" className="hover:text-white">
                  My Orders
                </Link>
              </li>

              <li>
                <Link href="/wishlist" className="hover:text-white">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link href="/cart" className="hover:text-white">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white">Electronics</li>
              <li className="hover:text-white">Fashion</li>
              <li className="hover:text-white">Home & Office</li>
              <li className="hover:text-white">Beauty</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Support
            </h3>

            <p className="mb-3">
              Need help with an order?
            </p>

            <Link
              href="/history"
              className="hover:text-white"
            >
              Track your orders
            </Link>

            <p className="mt-4">
              Thank you for shopping with AllMart!
            </p>
          </div>

        </div>


        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy;2026 AllMart. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;