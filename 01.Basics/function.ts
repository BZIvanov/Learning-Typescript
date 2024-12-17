// EXAMPLE 1

// our function will return result of type number
function sum(a: number, b: number): number {
  return a + b;
}

// here we don't need to specify, that the result variable is of type number because ts knows that from the return type of the function
const result = sum(3, 5);
console.log(result);

// EXAMPLE 2

let getValue: (text: string) => string;

getValue = (incomingValue) => {
  return incomingValue;
};

console.log(getValue("Hello"));

// EXAMPLE 3.1

// with default parameter
const getAddress = (name: string, city: string = "n/a"): string => {
  return `${name} is from ${city}`;
};

console.log(getAddress("John"));

// EXAMPLE 3.2

// with optional parameter
const getOptionalAddress = (name: string, city?: string): string => {
  if (city) {
    return `${name} is from ${city}`;
  }

  return `${name} is from n/a`;
};

console.log(getOptionalAddress("John"));
