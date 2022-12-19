/*-------------------------------- Constants --------------------------------*/

const possibleEmojis = ["🧯", "🔥", "⭐", "🧨" ,"☀️"]

const winningEmojis = [["🔥", "🔥", "🔥"], ["☀️", "☀️", "☀️"], ["⭐", "⭐", "⭐"]]

/*---------------------------- Variables (state) ----------------------------*/

let money = 20

/*------------------------ Cached Element References ------------------------*/

const spinBtn = document.querySelector('.spinBtn')

const slotEls = document.querySelectorAll('.slot')

const moneyAmount = document.querySelector('#money')

const message = document.querySelector('.message')

/*----------------------------- Event Listeners -----------------------------*/

spinBtn.addEventListener("click", spin)




/*-------------------------------- Functions --------------------------------*/



function init() {

    randomizeSlots()
    renderMoney()
}


init()


function renderMoney() {
  moneyAmount.innerHTML = `Bank: $${money}`
}


function checkForWin() {
    if(slotEls[0].innerHTML === "🔥" && slotEls[1].innerHTML === "🔥" && slotEls[2].innerHTML === "🔥") {
        money = money + 20
        message.innerHTML = "You won $20"
    }
    if(slotEls[0].innerHTML === "☀️" && slotEls[1].innerHTML === "☀️" && slotEls[2].innerHTML === "☀️") {
        money = money + 10
        message.innerHTML = "You won $10"
    }
    if(slotEls[0].innerHTML === "⭐" && slotEls[1].innerHTML === "⭐" && slotEls[2].innerHTML === "⭐") {
        money = money + 5
        message.innerHTML = "You won $5"
    }
    if(slotEls[0].innerHTML === "🧯" && slotEls[1].innerHTML === "🧯" && slotEls[2].innerHTML === "🧯") {
        money = money + 1
        message.innerHTML = "You won $1"
    }
    if(slotEls[0].innerHTML === "🧨" && slotEls[1].innerHTML === "🧨" && slotEls[2].innerHTML === "🧨") {
        money = money + 1
        message.innerHTML = "You won $1"
    }
}


function spin(evt) {
    message.innerHTML = ""
    money--
    randomizeSlots() 
    checkForWin()
    renderMoney()
}




function randomizeSlots() {
slotEls[0].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[1].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[2].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
}
