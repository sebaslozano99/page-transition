const BURGER = document.querySelector(".burger");
const NAV  = document.querySelector(".nav");

BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    BURGER.classList.remove("active");
    NAV.classList.remove("active");
}))




//container's code 
const TWO = document.querySelector(".boxTwo");
const DEPLOY = document.querySelector(".deploy-button");
const BACK = document.querySelector(".go-back");


DEPLOY.addEventListener("click", () => {
    TWO.classList.toggle("active");
})

BACK.addEventListener("click", () => {
    TWO.classList.remove("active");
})


// document.querySelector(".go-back").forEach(n => n.addEventListener("click", () => {
//     TWO.classList.remove("active");
// }))