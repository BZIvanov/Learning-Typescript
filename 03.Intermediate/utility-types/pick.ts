// EXAMPLE 1

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};

type ProductPreview = Pick<Product, "id" | "name" | "price">;

const product: ProductPreview = {
  id: 101,
  name: "Gaming Laptop",
  price: 1500,
};

// EXAMPLE 2

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type OptionalContactInfo = Partial<Pick<User, "email" | "isActive">>;

const contactInfo: OptionalContactInfo = {
  email: "alice@mail.com",
};
