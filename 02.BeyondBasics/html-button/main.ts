/*
  We have the HTMLButtonElement interface, because it is included by default with typescript.
  If we were to use typescript only for node.js and were not interested in having browser specific interfaces, we have to modify the tsconfig.json.
  In other words typescript comes with predefined interfaces for different environments and we could include only what we are interested in.
*/
// by adding exclamation mark at the end, we tell typescript, that we are sure the query will match element, it won't be null
const button = document.querySelector<HTMLButtonElement>("#myButton")!;

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
