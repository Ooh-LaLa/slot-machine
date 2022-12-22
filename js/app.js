/*-------------------------------- Constants --------------------------------*/

const possibleEmojis = ["🧯", "🔥", "🥵", "🧨", "🚒"]

const winningEmojis = [["🔥", "🔥", "🔥"], ["🚒", "🚒", "🚒"], ["🥵", "🥵", "🥵"]]

let marioAudio = new Audio('assets/8d82b5_Mario_Bros_New_Mario_Sound_Effect.mp3')

let yayAudio = new Audio('assets/428156__higgs01__yay.wav')
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
    yayAudio.volume = 0.50
}


init()


function renderMoney() {
  moneyAmount.innerHTML = `Cash: $${money}`
}


function checkForWin() {
    if(slotEls[0].innerHTML === "🔥" && slotEls[1].innerHTML === "🔥" && slotEls[2].innerHTML === "🔥") {
        money = money + 20
        message.innerHTML = "Congrats, hot stuff! You won $20"
        yayAudio.play()
    }
    if(slotEls[0].innerHTML === "🥵" && slotEls[1].innerHTML === "🥵" && slotEls[2].innerHTML === "🥵") {
        money = money + 10
        message.innerHTML = "Hot damn! You won $10"
        yayAudio.play()
    }
    if(slotEls[0].innerHTML === "🚒" && slotEls[1].innerHTML === "🚒" && slotEls[2].innerHTML === "🚒") {
        money = money + 5
        message.innerHTML = "It's hot in here! You won $5"
        yayAudio.play()
    }
    if(slotEls[0].innerHTML === "🧯" && slotEls[1].innerHTML === "🧯" && slotEls[2].innerHTML === "🧯") {
        money = money + 1
        message.innerHTML = "Congrats! You won $1"
        yayAudio.play()
    }
    if(slotEls[0].innerHTML === "🧨" && slotEls[1].innerHTML === "🧨" && slotEls[2].innerHTML === "🧨") {
        money = money + 1
        message.innerHTML = "Congrats! You won $1"
        yayAudio.play()
    }
}


function spin() {
    spinBtn.disabled = true
    message.innerHTML = ""
    money--
    renderMoney()
    randomizeSlots()

    marioAudio.volume = 0.25
    marioAudio.play()

    setTimeout(() => { 
        randomizeSlots()
        
    }, 100);

    setTimeout(() => { 
        randomizeSlots()
        
    }, 200);

    setTimeout(() => { 
        randomizeSlots()
        
    }, 350);

    setTimeout(() => { 
        finalSpin()
        
    }, 500);
}


function finalSpin(evt) {

    randomizeSlots() 
    checkForWin()
    renderMoney()

    if(money <= 0){
        message.innerHTML = "Game over! Refresh page to play again 🥵"
        spinBtn.style.visibility="hidden";
    } 
    else {
        spinBtn.disabled = false
    }
}




function randomizeSlots() {
slotEls[0].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[1].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[2].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
}



