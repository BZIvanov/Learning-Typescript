// EXAMPLE 1

// we can use readonly not for 'interface' only, but also 'type' for example

interface Person {
  readonly name: string;
  city: string;
  hobbies?: Array<string>;
}

const p: Person = {
  name: "Iva",
  city: "Sofia",
};

// name is specified as readonly and now we are not allowed to change it
// p.name = 'Eli';

// EXAMPLE 2

interface Hobby {
  location: string;
  workingDays: number;
}

// with the Readonly utility we can easily make all keys readonly
type HobbyRO = Readonly<Hobby>;

const h: HobbyRO = {
  location: "bul. Bulgaria",
  workingDays: 7,
};

// h.workingDays = 5;
