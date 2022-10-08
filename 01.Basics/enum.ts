// EXAMPLE 1:

enum GenderOptions {
  MALE,
  FEMALE,
}

function printCity(city: string, gender: GenderOptions) {
  if (gender === GenderOptions.MALE) {
    console.log('He is from ' + city);
  } else {
    console.log('She is from ' + city);
  }
}

printCity('Sofia', GenderOptions.MALE);

// EXAMPLE 2:

enum Sizes {
  Small = 1,
  Medium = 2,
  Large = 3,
}
const screenSize: number = Sizes.Large;
