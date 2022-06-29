const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// window.addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })

const alternateStyles = document.getElementsByClassName("alternate-style");
function setActiveStyle(color) {
    [].forEach.call(alternateStyles, (style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "");
        }
    })
    document.querySelector(".style-switcher").classList.remove("open");
}

const dayNight =  document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-mooon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})