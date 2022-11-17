const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")

const submit = document.getElementById("Submit")
const rateAgain = document.getElementById("rateAgain")

const rates = document.querySelectorAll(".btn")
const rating =document.getElementById("rating")


submit.addEventListener("click" , () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () =>{
    mainContainer.style.display = "block"
    thanksContainer.classList.add("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})


