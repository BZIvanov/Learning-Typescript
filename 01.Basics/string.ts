const firstName: string = "John";

// we will get suggestion for the available methods
console.log(firstName.toLocaleLowerCase());

// ts will infere the type, because obviously it is a string, so in such cases, we don't need to specify the type
const city = "Sofia";
