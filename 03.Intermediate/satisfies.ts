type Person = {
  name: string;
  age: number;
  role: "admin" | "user";
};

const john = {
  name: "John",
  age: 30,
  role: "admin",
} satisfies Person;
