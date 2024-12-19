// unknown is better compared to any for situations like this, where we don't know the type in advance, because ts will at least force us to check the type of the provided value
function getSquared(n: unknown) {
  if (typeof n === "number") {
    return n * n;
  }

  return 1;
}

console.log(getSquared(2));
console.log(getSquared("Hi"));
