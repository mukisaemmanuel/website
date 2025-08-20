const sidebar = document.querySelector(".side-bar");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    sidebar.classList.toggle("hide");
})