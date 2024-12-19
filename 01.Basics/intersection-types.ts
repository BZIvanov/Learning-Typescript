type Person = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type Employee = Person & Address;

const employee: Employee = {
  name: "John",
  age: 24,
  city: "Sofia",
  country: "Bulgaria",
};

console.log(employee);
