// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
one.addEventListener("click", () => {
  one.classList.toggle("blue");
});
let two = document.querySelector(".contextmenu");
two.addEventListener("contextmenu", () => {
  two.classList.toggle("teal");
});

let three = document.querySelector(".dblclick");
three.addEventListener("dblclick", () => {
  three.classList.toggle("red");
});

let four = document.querySelector(".mousedown");
four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

let five = document.querySelector(".mouseenter");
five.addEventListener("mouseenter", () => {
  five.classList.toggle("orange");
});

let six = document.querySelector(".mouseleave");
six.addEventListener("mouseleave", () => {
  six.classList.toggle("purple");
});

let seven = document.querySelector(".mousemove");
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("pink");
});

let eight = document.querySelector(".mouseout");
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("crimson");
});

let nine = document.querySelector(".mouseover");
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("chocolate");
});

let ten = document.querySelector(".mouseup");
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("aqua");
});
