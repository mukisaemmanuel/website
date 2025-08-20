// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const tagElement = document.getElementsByTagName("h4");
console.log(tagElement);
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
const tagElements = document.getElementsByTagName("div");
console.log(tagElements);
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
console.log(document.getElementsByClassName("blue"));
// 4. Select div which has the class & Id of "yello" by using querySelector()
console.log(document.querySelector("#yellow"));
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
console.log(document.querySelectorAll(".teal"));
