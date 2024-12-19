// EXAMPLE 1
const person: { name: string; age: number } = { name: "John", age: 24 };

// EXAMPLE 2
function printAge(personInfo: { name: string; age: number }): void {
  console.log(`${personInfo.name} is ${personInfo.age} years old.`);
}

printAge({ name: "John", age: 24 });

// EXAMPLE 3
// the below example will result in ts error for not known property city
// printAge({ name: "John", age: 24, city: "Sofia" });

// EXAMPLE 4
// here we will have array of objects
const myList: { value: number; printValue: () => void }[] = [];

for (let i = 0; i < 5; i++) {
  // no need to specify the type for item variable here, because ts can infer anyway
  const item = {
    value: i,
    printValue() {
      console.log(this.value);
    },
  };
  myList.push(item);
}

for (const listItem of myList) {
  listItem.printValue();
}

// EXAMPLE 5

// here we have object with dynamic keys
const techStack: {
  [key: string]: {
    rating: number;
    description: string;
  };
} = {
  html: {
    rating: 5,
    description: "HyperText Markup Language",
  },
  css: {
    rating: 4,
    description: "Cascading Style Sheets",
  },
};
