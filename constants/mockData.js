export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Office",
  "Beauty",
];

export const vendors = [
  {
    id: "vendor-1",
    name: "Tech Haven",
    category: "Electronics",
    description: "Your destination for quality electronics and gadgets.",
    products: [
      {
        id: "product-1",
        name: "Wireless Headphones",
        price: 45000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        description: "Premium wireless headphones with clear sound.",
      },
      {
        id: "product-2",
        name: "Smart Watch",
        price: 65000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        description: "Smart watch with fitness tracking features.",
      },
      {
        id: "product-3",
        name: "Digital Camera",
        price: 180000,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
        description: "Capture beautiful moments with this digital camera.",
      },
      {
        id: "product-4",
        name: "Bluetooth Speaker",
        price: 35000,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        description: "Portable speaker with powerful audio.",
      },
      {
        id: "product-5",
        name: "Laptop",
        price: 650000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
        description: "Modern laptop for productivity and entertainment.",
      },
    ],
  },

  {
    id: "vendor-2",
    name: "Urban Kicks",
    category: "Fashion",
    description: "Trendy fashion and footwear for everyday style.",
    products: [
      {
        id: "product-6",
        name: "Classic Sneakers",
        price: 55000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        description: "Comfortable sneakers for everyday activities.",
      },
      {
        id: "product-7",
        name: "Leather Handbag",
        price: 42000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
        description: "Elegant handbag with a spacious interior.",
      },
      {
        id: "product-8",
        name: "Wrist Watch",
        price: 38000,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
        description: "Stylish wrist watch for everyday wear.",
      },
      {
        id: "product-9",
        name: "Denim Jacket",
        price: 48000,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
        description: "Classic denim jacket with a modern fit.",
      },
      {
        id: "product-10",
        name: "Casual Backpack",
        price: 30000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        description: "Practical backpack for school and travel.",
      },
    ],
  },

  {
    id: "vendor-3",
    name: "Casa Living",
    category: "Home & Office",
    description: "Furniture and accessories for comfortable spaces.",
    products: [
      {
        id: "product-11",
        name: "Modern Office Chair",
        price: 95000,
        image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600",
        description: "Comfortable chair for your workspace.",
      },
      {
        id: "product-12",
        name: "Minimalist Table Lamp",
        price: 22000,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
        description: "Modern lamp for your bedroom or office.",
      },
      {
        id: "product-13",
        name: "Modern Sofa",
        price: 280000,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        description: "Comfortable sofa for your living room.",
      },
      {
        id: "product-14",
        name: "Decorative Wall Clock",
        price: 18000,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600",
        description: "Beautiful wall clock for modern interiors.",
      },
      {
        id: "product-15",
        name: "Office Desk",
        price: 120000,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
        description: "Spacious desk for work and study.",
      },
    ],
  },

  {
    id: "vendor-4",
    name: "Glow Essentials",
    category: "Beauty",
    description: "Everyday beauty and personal care essentials.",
    products: [
      {
        id: "product-16",
        name: "Skincare Gift Set",
        price: 28000,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
        description: "A collection of everyday skincare essentials.",
      },
      {
        id: "product-17",
        name: "Beauty Makeup Kit",
        price: 35000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
        description: "Makeup essentials for creative looks.",
      },
      {
        id: "product-18",
        name: "Perfume Bottle",
        price: 45000,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
        description: "A fragrance for everyday occasions.",
      },
      {
        id: "product-19",
        name: "Body Lotion",
        price: 12000,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600",
        description: "Moisturizing body lotion for daily care.",
      },
      {
        id: "product-20",
        name: "Makeup Brush Set",
        price: 18000,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
        description: "A set of brushes for makeup application.",
      },
    ],
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};