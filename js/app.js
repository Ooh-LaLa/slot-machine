/*-------------------------------- Constants --------------------------------*/

const possibleEmojis = ["🧯", "🔥", "⭐", "🧨" ,"☀️"]

const winningEmojis = [["🔥", "🔥", "🔥"], ["☀️", "☀️", "☀️"], ["⭐", "⭐", "⭐"]]

let marioAudio = new Audio('assets/8d82b5_Mario_Bros_New_Mario_Sound_Effect.mp3')
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
        message.innerHTML = "Congrats! You won $20"
    }
    if(slotEls[0].innerHTML === "☀️" && slotEls[1].innerHTML === "☀️" && slotEls[2].innerHTML === "☀️") {
        money = money + 10
        message.innerHTML = "Congrats! You won $10"
    }
    if(slotEls[0].innerHTML === "⭐" && slotEls[1].innerHTML === "⭐" && slotEls[2].innerHTML === "⭐") {
        money = money + 5
        message.innerHTML = "Congrats! You won $5"
    }
    if(slotEls[0].innerHTML === "🧯" && slotEls[1].innerHTML === "🧯" && slotEls[2].innerHTML === "🧯") {
        money = money + 1
        message.innerHTML = "Congrats! You won $1"
    }
    if(slotEls[0].innerHTML === "🧨" && slotEls[1].innerHTML === "🧨" && slotEls[2].innerHTML === "🧨") {
        money = money + 1
        message.innerHTML = "Congrats! You won $1"
    }
}


function spin(evt) {
    message.innerHTML = ""
    money--
    randomizeSlots() 
    checkForWin()
    renderMoney()
    marioAudio.volume = 0.25
    marioAudio.play()

    if(money <= 0){
        message.innerHTML = "Game over! Refresh page to play again."
        spinBtn.style.visibility="hidden";
    }

   
}




function randomizeSlots() {
slotEls[0].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[1].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[2].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
}



