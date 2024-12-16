// EXAMPLE 1
function getData(): never {
  throw new Error("Error getting data");
}

// EXAMPLE 2
function endless(): never {
  while (true) {
    console.log("Keep going...");
  }
}
