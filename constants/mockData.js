export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Office",
  "Beauty"
];

export const vendors = [
  {
    id: "v1",
    name: "Tech Haven",
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1491934305136-0a1b7b8ba6ad?w=900",
    description: "Premium gadgets and electronics.",
    products: [
      {
        id: "p1",
        name: "Wireless Headphones",
        price: 150000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
        description: "Premium noise cancelling headphones."
      },
      {
        id: "p2",
        name: "Smart Television",
        price: 450000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900",
        description: "55-inch smart television."
      }
    ]
  },

  {
    id: "v2",
    name: "Urban Kicks",
    category: "Fashion",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900",
    description: "Latest sneakers and streetwear.",
    products: [
      {
        id: "p3",
        name: "Classic Sneakers",
        price: 45000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
        description: "Stylish everyday sneakers."
      },
      {
        id: "p4",
        name: "Cotton Hoodie",
        price: 25000,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
        description: "Comfortable cotton hoodie."
      }
    ]
  },

  {
    id: "v3",
    name: "Casa Living",
    category: "Home & Office",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
    description: "Beautiful home and office accessories.",
    products: [
      {
        id: "p5",
        name: "Desk Lamp",
        price: 18000,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900",
        description: "Modern minimalist desk lamp."
      }
    ]
  }
];

export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
};