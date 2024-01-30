const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openCookie = document.querySelector("#openCookie")
const anotherCookie = document.querySelector("#anotherCookie")

openCookie.addEventListener("click", handleOpenClick)
anotherCookie.addEventListener("click", handleAnotherCookie)

function handleOpenClick(event) {
  event.preventDefault()
  toggleScreen()
}

function handleAnotherCookie() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
