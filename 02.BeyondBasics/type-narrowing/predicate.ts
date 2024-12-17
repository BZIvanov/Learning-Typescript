function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printLength(value: string | number) {
  if (isString(value)) {
    // TypeScript now knows 'value' is a string
    console.log(`String length: ${value.length}`);
  } else {
    // TypeScript narrows it to 'number' here
    console.log(`Number value: ${value}`);
  }
}

printLength("Hello");
printLength(42);
