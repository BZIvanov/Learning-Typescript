// return type of void is used, when we are not returning value
function printName(name: string): void {
  console.log(name);
}

printName("Iva");

// we can set void type if the variable is undefined, for other types we will get an error
let something: void = undefined;
