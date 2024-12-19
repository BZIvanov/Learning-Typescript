// below is an example how to ignore ts error, we should not do that, this is just for the demo

function sum(a: number, b: number) {
  return a + b;
}

// @ts-ignore
sum("a", "b");
