let id: symbol = Symbol(1234);

let user = {
  [id]: "4235",
  name: "John",
  getId() {
    return this[id];
  },
};

console.log(user.name);
console.log(user.getId());
