// EXAMPLE 1

// now the inputType will change based on the value of input
let input = 10;
let inputType: typeof input;

// EXAMPLE 2

const product = {
  name: "Laptop",
  price: 1000,
};

// with typeof in typescript we can extract the type from an existing object for example
type Product = typeof product;

const myProduct: Product = {
  name: "Desk",
  price: 200,
};
