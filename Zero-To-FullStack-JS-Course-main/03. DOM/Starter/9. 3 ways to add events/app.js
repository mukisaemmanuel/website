// ----------- BAD WAY-----------

const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = () => {
  console.log("hello, Emmanuel");
};

// ----------- GREAT WAY-----------

const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("hello, Mukisa Emmanuel"));

// ----------- Event (e) Object -----------

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
});
