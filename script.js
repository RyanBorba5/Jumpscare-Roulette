var Entranceaudio = new Audio('');

function readInput() {
    var userInput = document.getElementById("userInput").value;
}

function generateBoard() {
    
}

function beginReveal(clickedcard) {
    let randomnum = getRandomInt(8000,20000);
    const foggybox = document.getElementById('foggybox');
    foggybox.style.display = 'block';
    foggybox.style.transition = 'transform 7s';
    const coinimgelement = document.getElementById('coinimg');
    requestAnimationFrame(() => {
        foggybox.style.transform = 'scale(7500%, 7500%)'; 
    });
    playEntranceSound();
    setTimeout(() => {
        Entranceaudio.pause();
        decideResult();
     }, randomnum); // After random interval the jumpscare or coins pops up.

    setTimeout(() => {
       requestAnimationFrame(() => {
        foggybox.style.transform = 'scale(0%, 0%)'; 
        }); 
        const clickedcardelement = document.getElementById(clickedcard);
        clickedcardelement.style.display = 'none';
        const clickedcarddivelement = clickedcardelement.parentNode;
        clickedcarddivelement.style.visibility = 'hidden';
        clickedcarddivelement.style.pointerEvents = 'none';
        coinimgelement.style.display = 'none';
    }, randomnum + 5000);
}

function playEntranceSound() {
    let randomnum = getRandomInt(1,3);
    switch (randomnum) {
        case 1: 
            Entranceaudio = new Audio('/sounds/creepy-ambience1.mp3');
            Entranceaudio.play();
        break;

        case 2: 
            Entranceaudio = new Audio('/sounds/creepy-ambience2.mp3');
            Entranceaudio.play();
        break;

        case 3: 
            Entranceaudio = new Audio('/sounds/howling-wind-edited.mp3');
            Entranceaudio.play();
        break;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scare() {
    const scareimg = document.getElementById('scareimg');
    let randomnum = getRandomInt(1,3);
    let scareaudio = new Audio('');
    switch (randomnum) {
        case 1: 
            scareimg.src = '/images/zombie1.jpg';
            scareaudio = new Audio('/sounds/zombieroar.mp3');
        break;

        case 2: 
            scareimg.src = '/images/zombie1.jpg';
            scareaudio = new Audio('/sounds/zombieroar.mp3');
        break;

        case 3: 
            scareimg.src = '/images/zombie1.jpg';
            scareaudio = new Audio('/sounds/zombieroar.mp3');
        break;
    }
    scareimg.style.display = 'block';
    scareimg.style.transform = 'scale(60, 60)'; 
    scareaudio.play();
    scareaudio.onended = () => {
        scareaudio.pause();
        scareaudio.currentTime = 0;
        scareimg.style.display = 'none';
    };
}

function coins() {
    let audio = new Audio('/sounds/collect-coins.mp3');
    audio.play();
    const coinelement = document.getElementById('coinimg');
    coinimg.style.display = 'block';
}

function decideResult() {
    let randomnum = getRandomInt(1,100);
    let randomnum2 = getRandomInt(1,100);
    if (randomnum > randomnum2) {
        scare();
    }else {
        coins();
    }
}