// EXAMPLE 1.1

class User {
  // with typescript we need to specify our fields here and their type
  name: string;
  age: number;
  email: string;
  city?: string;

  constructor(name: string, age: number, email: string, city?: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
  }
}

const myUser = new User("John", 30, "john@mail.com");

// EXAMPLE 1.2

class Person {
  // alternative syntax is instead of specifying the fields in the class to specify them in the constructor
  constructor(
    public name: string,
    public age: number,
    public readonly email: string,
    public city?: string
  ) {}
}

const myPerson = new Person("John", 30, "john@mail.com");
