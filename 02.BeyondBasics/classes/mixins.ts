type Construnctor = new (...args: any[]) => {};

function Timestamped<T extends Construnctor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}

class User {
  constructor(public name: string) {}
}

class TimestampedUser extends Timestamped(User) {
  getInfo() {
    return `${this.name} - ${this.getTimestamp()}`;
  }
}

const timestampedUser = new TimestampedUser("John");
console.log(timestampedUser.getInfo());
