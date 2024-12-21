class Seller {
  constructor(private name: string) {}

  sayHello(): string {
    return `${this.name} says hi!`;
  }
}

const seller = new Seller("John");
console.log(seller.sayHello());
