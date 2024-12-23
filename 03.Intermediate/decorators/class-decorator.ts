enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

interface IUser {
  username: string;
  isAdmin?: boolean;
}

function UserRole(role: Roles) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      public isAdmin: boolean = role === Roles.ADMIN;
    };
  };
}

@UserRole(Roles.ADMIN)
class User implements IUser {
  constructor(public username: string) {}
}

const user: IUser = new User("John");
console.log(user);
