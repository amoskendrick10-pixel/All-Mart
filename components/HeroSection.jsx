import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl bg-gray-900 px-8 py-16 text-white md:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 font-semibold text-blue-400">
            WELCOME TO ALLMART
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Everything You Need,
            <span className="text-blue-400">
              All in One Place.
            </span>
          </h1>

          <p className="mt-6 text-gray-300">
            Discover amazing products from different vendors.
            Shop smarter, shop easier with AllMart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;