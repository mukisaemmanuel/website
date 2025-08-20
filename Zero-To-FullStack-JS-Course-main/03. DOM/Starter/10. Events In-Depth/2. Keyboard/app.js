// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// input.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

input.addEventListener("keypress", (e) => {
  // console.log(e.charCode);
  // console.log(e.code);
  console.log(e.ctrlKey);
});
