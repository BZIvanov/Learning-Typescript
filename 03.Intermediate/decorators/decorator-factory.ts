function BasicDecoratorFactory(name: string) {
  return function (target: any, context: any) {
    console.log(`${name} decorator invoked`);
    console.log(target);
    console.log(context);
  };
}

@BasicDecoratorFactory("MyUser")
class User {
  constructor(public username: string) {
    console.log("User class instantiated");
  }
}

const user = new User("John");
