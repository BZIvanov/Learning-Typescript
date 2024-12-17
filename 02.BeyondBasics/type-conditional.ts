// extends type works as comparison, if the provided generic type value matches whatever we extend the respective type will be returned
type Product<T> = T extends "ProductName" ? string : number;

let productName: Product<"ProductName">; // it will be of type string
let productPrice: Product<"SomethingElse">; // it will be of type number
