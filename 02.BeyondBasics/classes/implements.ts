// EXAMPLE 1

interface User {
  name: string;
  email: string;
  age?: number;
  getInfo(): string;
}

class Customer implements User {
  constructor(public name: string, public email: string, public age?: number) {}

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}
