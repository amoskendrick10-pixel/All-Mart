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
    rating: 4.8,
    image: "/images/tech-haven.png",
    description: "Premium gadgets and electronics.",
    products: [
      {
        id: "product-1",
        name: "Wireless Noise-Cancelling Headphones",
        price: 150000,
        image: "/images/headphone.png",
        description: "Industry-leading noise cancellation.",
      },
      {
        id: "product-2",
        name: "4K Ultra HD Smart TV",
        price: 450000,
        image: "/images/smart-tv.png",
        description: "55-inch smart display with HDR.",
      },
      {
        id: "product-3",
        name: "Smart Watch",
        price: 85000,
        image: "/images/smartwatch.png",
        description: "Smart watch with fitness tracking features.",
      },
      {
        id: "product-4",
        name: "Bluetooth Speaker",
        price: 55000,
        image: "/images/bluetooth-speaker.png",
        description: "Portable speaker with powerful audio.",
      },
      {
        id: "product-5",
        name: "Laptop",
        price: 650000,
        image: "/images/laptop.png",
        description: "Modern laptop for productivity and entertainment.",
      },
    ],
  },

  {
    id: "vendor-2",
    name: "Urban Kicks",
    category: "Fashion",
    rating: 4.5,
    image: "/images/urban-kicks.png",
    description: "Latest sneakers and streetwear.",
    products: [
      {
        id: "product-6",
        name: "Classic High-Top Sneakers",
        price: 45000,
        image: "/images/sneakers.png",
        description: "Durable and stylish everyday wear.",
      },
      {
        id: "product-7",
        name: "Graphic Cotton Hoodie",
        price: 25000,
        image: "/images/hoodie.png",
        description: "100% organic cotton, oversized fit.",
      },
      {
        id: "product-8",
        name: "Leather Handbag",
        price: 42000,
        image: "/images/leather-bag.png",
        description: "Elegant handbag with a spacious interior.",
      },
      {
        id: "product-9",
        name: "Denim Jacket",
        price: 48000,
        image: "/images/denim-jacket.png",
        description: "Classic denim jacket with a modern fit.",
      },
      {
        id: "product-10",
        name: "Casual Backpack",
        price: 30000,
        image: "/images/backpack.png",
        description: "Practical backpack for school and travel.",
      },
    ],
  },

  {
    id: "vendor-3",
    name: "Casa Living",
    category: "Home & Office",
    rating: 4.7,
    image: "/images/casa-living.png",
    description: "Furniture and accessories for comfortable spaces.",
    products: [
      {
        id: "product-11",
        name: "Modern Office Chair",
        price: 95000,
        image: "/images/chair.png",
        description: "Comfortable chair for your workspace.",
      },
      {
        id: "product-12",
        name: "Minimalist Table Lamp",
        price: 22000,
        image: "/images/work-lamp.png",
        description: "Modern lamp for your bedroom or office.",
      },
      {
        id: "product-13",
        name: "Modern Sofa",
        price: 280000,
        image: "/images/modern-sofa.png",
        description: "Comfortable sofa for your living room.",
      },
      {
        id: "product-14",
        name: "Decorative Wall Clock",
        price: 18000,
        image: "/images/clock.png",
        description: "Beautiful wall clock for modern interiors.",
      },
      {
        id: "product-15",
        name: "Office Desk",
        price: 120000,
        image: "/images/workspace.png",
        description: "Spacious desk for work and study.",
      },
    ],
  },

  {
    id: "vendor-4",
    name: "Glow Essentials",
    category: "Beauty",
    rating: 4.9,
    image: "/images/glow-essentials.png",
    description: "Everyday beauty and personal care essentials.",
    products: [
      {
        id: "product-16",
        name: "Skincare Gift Set",
        price: 28000,
        image: "/images/skincare.png",
        description: "A collection of everyday skincare essentials.",
      },
      {
        id: "product-17",
        name: "Beauty Makeup Kit",
        price: 35000,
        image: "/images/makeup-brush-set.png",
        description: "Makeup essentials for creative looks.",
      },
      {
        id: "product-18",
        name: "Perfume Bottle",
        price: 45000,
        image: "/images/perfume-bottle.png",
        description: "A fragrance for everyday occasions.",
      },
      {
        id: "product-19",
        name: "Body Lotion",
        price: 12000,
        image: "/images/body-lotion.png",
        description: "Moisturizing body lotion for daily care.",
      },
      {
        id: "product-20",
        name: "Makeup Brush Set",
        price: 18000,
        image: "/images/makeup-brush-set.png",
        description: "A set of brushes for makeup application.",
      },
    ],
  },
];

export const mockOrderHistory = [
  {
    orderId: "ORD-10928",
    date: "2026-10-25T10:00:00Z",
    vendorNames: ["Tech Haven"],
    status: "Delivered",
    items: [
      {
        name: "Wireless Noise-Cancelling Headphones",
        quantity: 1,
        price: 150000,
      },
    ],
    subtotal: 150000,
    shippingFee: 2500,
    total: 152500,
    deliveryAddress: "123 Dev Avenue, Lagos",
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};