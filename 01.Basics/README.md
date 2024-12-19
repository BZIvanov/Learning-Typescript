# The basics

List of the basic types and usage:

1. primitive-types
2. any
3. unknown
4. union
5. array
6. tuple
7. function
8. void
9. never
10. object
11. optional
12. literal
13. type
14. typeof
15. mapped-types
16. conditional-types
17. intersection-types
18. interface
19. readonly
20. enum
21. casting
22. skip-check

## Type vs Interface

Interface could be implmented by a class and is usually used for objects.
Type can hold variety of types, not just objects, which makes them more flexible.

## Syntax comparison for array vs tuple

```typescript
const food: string[] = ["apple", "banana"];

// vs.

const food: [string, string] = ["apple", "banana"];
```
