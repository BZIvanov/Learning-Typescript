// example of discriminated union type narrowing

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

const square: Square = { kind: "square", size: 4 };
const rectangle: Rectangle = { kind: "rectangle", width: 2, height: 3 };
const circle: Circle = { kind: "circle", radius: 5 };

console.log(getArea(square));
console.log(getArea(rectangle));
console.log(getArea(circle));
