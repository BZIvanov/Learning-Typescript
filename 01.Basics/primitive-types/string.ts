let title: string = "Movie Title";

// we will get suggestion for the available methods
console.log(title.toLocaleLowerCase());

// ts will infer the type, because obviously it is a string, so in such cases, we don't need to specify the type
let city = "Sofia";

// with const the infered type will not just be a string, but the exact value
const firstName = "John";
