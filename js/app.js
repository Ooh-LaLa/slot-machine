/*-------------------------------- Constants --------------------------------*/

const possibleEmojis = ["🧯", "😘", "🔥", "⭐", "🍀", "🍒" ,"☀️", "💦"]

const slotEls = document.querySelectorAll('.slot')

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const spinBtn = document.querySelector('.spinBtn')

/*----------------------------- Event Listeners -----------------------------*/

spinBtn.addEventListener("click", spin)




/*-------------------------------- Functions --------------------------------*/



function spin(evt) {
    randomizeSlots() 
}



function randomizeSlots() {
slotEls[0].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[1].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
slotEls[2].innerHTML = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
}

