// with tuple like this we require the first element to be string and the next 2 to be numbers
const positions: [string, number, number] = ["First", 3, 5];

console.log(positions);

// we can also have optional elements in tuple
const positions2: [string, number?, number?] = ["First"];

console.log(positions2);

// we can also have rest elements in tuple
const positions3: [string, ...number[]] = ["First", 3, 5, 7];

console.log(positions3);
