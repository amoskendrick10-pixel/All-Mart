import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const StoreBanner = ({ vendor }) => {
  return (
    <section className="bg-gray-900 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">


        <div>
          <Link
            href="/"
            className="text-sm text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-semibold text-blue-400">
            {vendor.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {vendor.name}
          </h1>

          <p className="mt-4 max-w-xl text-gray-300">
            {vendor.description}
          </p>


          <div className="mt-6 flex items-center gap-2">
            <Star
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {vendor.rating}
            </span>

            <span className="text-sm text-gray-400">
              Vendor Rating
            </span>
          </div>
        </div>


        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default StoreBanner;