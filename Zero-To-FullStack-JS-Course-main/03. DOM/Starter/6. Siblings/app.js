// const firstLi = document.querySelector("li");
// const secondLi = firstLi.nextSibling;
// const thirdLi = secondLi.nextSibling;
// const fourthLi = thirdLi.nextSibling;

// console.log(firstLi);
// console.log(secondLi);
// console.log(thirdLi);
// console.log(fourthLi);

// let ul = document.querySelector("ul");
// console.log((ul.children[0].innerText = "one"));

// let firstLi = document.querySelector("li");
// let secondLi = firstLi.nextElementSibling;
// let thirdLi = secondLi.nextElementSibling;
// let fourthLi = thirdLi.nextElementSibling;

// console.log(firstLi.textContent);
// console.log(secondLi.textContent);
// console.log(thirdLi.textContent);
// console.log(fourthLi.textContent);

// firstLi.textContent = "one";
// secondLi.textContent = "two";
// thirdLi.textContent = "three";
// fourthLi.textContent = "four";

let fourthLi = document.querySelector(".fourth");
let thirdLi = fourthLi.previousElementSibling;
let secondLi = thirdLi.previousElementSibling;
let firstLi = secondLi.previousElementSibling;

console.log(fourthLi.textContent);
console.log(thirdLi.textContent);
console.log(secondLi.textContent);
console.log(firstLi.textContent);
