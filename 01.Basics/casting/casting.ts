// EXAMPLE 1

let info = <any>"Updated";

// EXAMPLE 2

let taskStatus = "Completed" as any;

// EXAMPLE 3

// now the type will be 123, not just number
let id = 123 as const;

// EXAMPLE 4.1

let user = { name: "John", age: 30 } as const;

// EXAMPLE 4.2

let user2 = <const>{ name: "John", age: 30 };
