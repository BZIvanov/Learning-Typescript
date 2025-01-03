abstract class Employee {
  // public is the default value even if we don't set it it will be public
  public name: string;
  public age: number;
  public salary: number;
  public tasks: Array<string>;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }

  public work(): void {
    const currentTask = this.tasks.shift();
    if (currentTask) {
      this.tasks.push(currentTask);
      console.log(this.name + currentTask);
    }
  }

  public collectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
  }

  public getSalary(): number {
    return this.salary;
  }
}

export class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(" is working on a simple task");
  }
}

export class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(" is working on a complicated task.");
    this.tasks.push(" is taking time off work.");
    this.tasks.push(" is supervising junior workers.");
  }
}

export class Manager extends Employee {
  public divident: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(" scheduled a meeting.");
    this.tasks.push(" is preparing a quarterly meeting.");
  }

  public getSalary(): number {
    return this.salary + this.divident;
  }
}

const myJunior = new Junior("Toni", 28);
myJunior.work();
console.log(myJunior.getSalary());
myJunior.salary = 2000;
myJunior.collectSalary();

const mySenior = new Senior("Mitko", 31);
mySenior.work();
mySenior.work();
mySenior.salary = 7000;
mySenior.collectSalary();
