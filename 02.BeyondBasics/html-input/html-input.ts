// as is typescript assertion, we are telling ts in this example, that we are sure this element will be present and the selector will not be null
const firstInput = document.getElementById("first") as HTMLInputElement;

// specifying like this, that our element is input is alternative syntax on the above line
const secondInput = <HTMLInputElement>document.getElementById("second");
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  const firstVal = firstInput.value;
  const secondVal = secondInput.value;
  console.log(firstVal, secondVal);
});
