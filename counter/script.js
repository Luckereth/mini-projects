const shownNumber = document.getElementById("number")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
let number = 0;


decreaseBtn.onclick = function () {
    number--;
    shownNumber.textContent = number
}

resetBtn.onclick = function () {
    number = 0;
    shownNumber.textContent = number
}

increaseBtn.onclick = function () {
    number++;
    shownNumber.textContent = number
}