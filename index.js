"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const buttonClick = document.getElementById("button-click")
    const buttonReset = document.getElementById("button-reset")
    const counter = document.getElementsByClassName("counter")[0];

    buttonClick.addEventListener("click", () => {
        const currentCounter = parseInt(counter.innerText.split(":")[1], 10)
        counter.innerText = "Anzahl Klicks: " + (currentCounter + 1)
    })

    buttonReset.addEventListener("click", () => {
        counter.innerText = "Anzahl Klicks: 0"
    })
})