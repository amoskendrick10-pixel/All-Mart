"use client";

import { Search } from "lucide-react";

const SearchInput = ({ value, onChange }) => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-4 shadow-sm">
        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search for products, brands and categories"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-gray-800 outline-none"
        />
      </div>
    </section>
  );
};

export default SearchInput;