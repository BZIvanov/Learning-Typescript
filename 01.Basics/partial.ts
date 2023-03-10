type Product = {
  name: string;
  price: number;
  rating: number;
};

// partial is the way to make all the keys optional
const myProduct: Partial<Product> = { name: 'Laptop' };

// the below line will result in error, because with Partial making all the keys optional, the name key could be undefined, not always a string
// const productName: string = myProduct.name;
