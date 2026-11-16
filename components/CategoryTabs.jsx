"use client";

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">
        Shop by Category
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;