// function type example
let getValue: (text: string) => string;

getValue = (incomingValue) => {
  return incomingValue;
};

console.log(getValue('Hello'));
