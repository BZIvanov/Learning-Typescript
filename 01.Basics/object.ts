// EXAMPLE 1
function printAge(personInfo: { name: string; age: number }): void {
  console.log(`${personInfo.name} is ${personInfo.age} years old.`);
}

printAge({ name: "John", age: 24 });

// EXAMPLE 2
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
