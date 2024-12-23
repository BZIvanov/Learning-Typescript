function BasicDecorator(target: any, context: any) {
  console.log(target);
  console.log(context);
}

@BasicDecorator
class User {
  constructor(public username: string) {
    console.log("User class instantiated");
  }
}

const user = new User("John");
