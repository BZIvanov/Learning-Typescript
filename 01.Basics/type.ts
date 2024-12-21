// EXAMPLE 1

// this way we can define type, which we can easily reuse, instead of typing the entire type object everywhere
type User = { name: string; city: string; income: number };

const usersList: User[] = [];

const myUser = { name: "Iva", city: "Sofia", income: 5700 };

const addUser = (user: User): void => {
  usersList.push(user);
};

addUser(myUser);
console.log(usersList);

// EXAMPLE 2

// basically type keyword is the same as type string for example, but used for more complicated types than just number or string
type funcInput = string | number;

function printIt(value: funcInput) {
  return value;
}

console.log(printIt("Hello"));

// EXAMPLE 3

// optional parameters, with questionmark we can specify something as optional
type Employee = { name: string; position: string; income?: number };
const myEmployee: Employee = { name: "Iva", position: "Marketing" };

// EXAMPLE 4

// this way we can create array of only specific values allowed
type Food = "apple" | "cake" | "soup";
type DeliciousFoods = Food[];

const foods: DeliciousFoods = ["apple", "cake"];

// EXAMPLE 5 - recursive types

type NumberArrays = number | NumberArrays[];

const numbers: NumberArrays = 5;
const moreNumbers: NumberArrays = [5, [2, 3, [4, 5]], 1];

// EXAMPLE 6 - intersection types

type CustomerDetails = { id: number; name: string; location: string };

type CustomerPrimaryAction = { purchase(): void };

type CustomerSecondaryAction = { order(): void };

type Customer = CustomerDetails &
  CustomerPrimaryAction &
  CustomerSecondaryAction;

const myCustomer: Customer = {
  id: 1,
  name: "Customer",
  location: "Sofia",
  purchase() {
    console.log("made purchase");
  },
  order() {
    console.log("made order");
  },
};

// EXAMPLE 7 index signatures

type Inventory = {
  [k: string]: number;
};

const myInventory: Inventory = {
  "Item 1": 31,
  "Item 2": 45,
};

// EXAMPLE 8 - function return type

type Movie = { title: string; year: number };

type buyMovie = { (title: string, year: number): Movie };
