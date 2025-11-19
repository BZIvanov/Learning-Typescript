# Classes

1. classes
2. classes-sort
3. classes-method
4. classes-extends
5. js-classes
6. classes-generics
7. key-value-pairs
8. implements

## Access modifiers

Access modifiers provided by typescript are `public`, `protected` and `private`.

## Constructor Parameter Properties

**What It Is?** TypeScript provides a shorthand syntax known as **parameter properties**, which allows you to declare and initialize class properties **directly in the constructor parameters**.

This avoids having to:

1. Declare a class property
2. Assign the constructor parameter to that property manually

### Standard (Long) Way

Without sugar syntax, you would write something like this:

```ts
class UsersController {
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }
}
```

You explicitly:

- declare the property (`usersService`)
- assign it in the constructor

### Using Parameter Properties (Sugar Syntax)

Here’s the exact same thing using TypeScript's shortcut:

```ts
class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}
}
```

By adding a visibility modifier (`private`, `public`, or `protected`) directly in front of the constructor parameter:

- TypeScript automatically creates a class property with that name
- and automatically assigns the argument to it

No need to write anything extra.

### Benefits

- Less boilerplate
- Clearer intent
- Great for DI-heavy frameworks like NestJS
- Encourages immutability with `readonly`

### When You Shouldn’t Use It

- When property initialization is complex
- When the value needs validation before assignment
- When naming the injected dependency differently than the property

Example:

```ts
constructor(service: UsersService) {
  this.users = service; // custom mapping
}
```
