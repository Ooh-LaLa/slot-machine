/*-------------------------------- Constants --------------------------------*/

const possibleEmojis = ["🧯", "😘", "🔥", "⭐", "🍀", "🍒" ,"☀️"]

const winningEmojis = [["🔥", "🔥", "🔥"], ["☀️", "☀️", "☀️"], ["⭐", "⭐", "⭐"]]
/*---------------------------- Variables (state) ----------------------------*/

let money = 10

/*------------------------ Cached Element References ------------------------*/

const spinBtn = document.querySelector('.spinBtn')

const slotEls = document.querySelectorAll('.slot')

const moneyAmount = document.querySelector('#money')

/*----------------------------- Event Listeners -----------------------------*/

spinBtn.addEventListener("click", spin)




/*-------------------------------- Functions --------------------------------*/



function init() {
    renderMoney()
}


init()


function renderMoney() {
  moneyAmount.innerHTML = `Bank: $${money}`
}


function updateMoney() {
    
}


function spin(evt) {
    money--
    randomizeSlots() 
    renderMoney()
}




function randomizeSlots() {
slotEls[0].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[1].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[2].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
}



