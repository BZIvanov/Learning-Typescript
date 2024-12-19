// z is optional
function getVolume(shape: { x: number; y: number; z?: number }): number {
  if (shape.z) {
    return shape.x * shape.y * shape.z;
  }

  return shape.x * shape.y;
}

getVolume({ x: 3, y: 4 });
getVolume({ x: 3, y: 4, z: 5 });
