# Generics

1. one-generic-type
2. two-generic-types

## Syntax comparison for arrow function vs function declaration

```typescript
function getValue<T>(value: T): T {
  return value;
}

// vs.

const getValue = <T>(value: T): T => {
  return value;
};
```
