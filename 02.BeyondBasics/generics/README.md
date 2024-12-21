# Generics

1. one-generic-type
2. two-generic-types
3. default value

## Syntax comparison for arrow function vs function declaration vs function expression

```typescript
function getValue<T>(value: T): T {
  return value;
}

// vs.

const getValue = <T>(value: T): T => {
  return value;
};

// vs.

const getValue = function <T>(value: T): T {
  return value;
};
```
