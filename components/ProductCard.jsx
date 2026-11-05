export default function Footer() {

  return (

    <footer className="bg-gray-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-2xl font-black">

          All<span className="text-blue-500">Mart</span>

        </h2>

        <p className="text-gray-400 mt-3">

          Everything you need, all in one place.

        </p>

        <div className="border-t border-gray-800 mt-8 pt-6">

          <p className="text-sm text-gray-500 text-center">

            © {new Date().getFullYear()} AllMart. All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );

}