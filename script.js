console.log("Hallo Berry!")

const introductie = document.querySelector("h1")

const donkereBeerOptie = document.querySelector("#donkerbruin")
const lichteBeerOptie = document.querySelector("#lichtbruin")
const koffieBeerOptie = document.querySelector("#koffiebruin")

const groteKoffieBeer = document.querySelector("#koffiebruinBeer")
const groteDefaultBeer = document.querySelector("#defaultBeer")
const groteDonkereBeer = document.querySelector("#donkerbruinBeer")

const achtergrondHartjes = document.querySelector("#hartjes")
const achtergrondBloemetjes = document.querySelector("#bloemetjes")
const achtergrondSterretjes = document.querySelector("#sterretjes")

let bericht = "Welkom Berry!"
let kop = document.querySelector("h1")

let strik = document.querySelector("#strik")
let hoed = document.querySelector("#hoed")
let bril = document.querySelector("#bril")

let menuStrik = document.querySelector("#menuStrik")
let menuHoed = document.querySelector("#menuHoed")
let menuBril = document.querySelector("#menuBril")

let cropTop = document.querySelector("#croptop")
let shirt = document.querySelector("#streepjes")
let sjaal = document.querySelector("#sjaal")

let menuCroptop = document.querySelector("#menuCropTop")
let menuStreepjes = document.querySelector("#menuStreepjes")
let menuSjaal = document.querySelector("#menuSjaal")

function verandertitel() {
    kop.textContent = bericht
    kop.classList.add("slide-in")
}

function showHint() {
    hint.textContent = "Klik op de items om je beer aan te passen!"
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hint.textContent = ""
}
showHint()

function koffieBeer() {
    groteKoffieBeer.classList.add("zichtbaar")
    groteKoffieBeer.classList.remove("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
}

function donkerBeer() {
    groteDonkereBeer.classList.add("zichtbaar")
    groteDonkereBeer.classList.remove("onzichtbaar")
    groteKoffieBeer.classList.add("onzichtbaar")
    groteKoffieBeer.classList.add("onzichtbaar")
}

function lichteBeer() {
    groteDefaultBeer.classList.add("zichtbaar")
    groteDefaultBeer.classList.remove("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
}

function lichtedonkerBeer() {
    groteDonkereBeer.classList.add("zichtbaar")
    groteDonkereBeer.classList.remove("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
}

introductie.addEventListener("mouseenter", verandertitel)

koffieBeerOptie.addEventListener('click', koffieBeer);
donkereBeerOptie.addEventListener('click', donkerBeer);
donkereBeerOptie.addEventListener('click', lichtedonkerBeer);
lichteBeerOptie.addEventListener('click', lichteBeer);

menuStrik.addEventListener("click", () =>{
    strik.classList.toggle("show")
})
menuHoed.addEventListener("click", () =>{
    hoed.classList.toggle("show")
})
menuBril.addEventListener("click", () =>{
    bril.classList.toggle("show")
})

menuCroptop.addEventListener("click",() =>{
    cropTop.classList.toggle("show")
})
menuStreepjes.addEventListener("click",() =>{
    shirt.classList.toggle("show")
})
menuSjaal.addEventListener("click", () =>{
    sjaal.classList.toggle("show")
})

achtergrondHartjes.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(Beer+Alles/background2.png)";
});
achtergrondBloemetjes.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(Beer+Alles/background1.jpg)";
});
achtergrondSterretjes.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(Beer+Alles/background3.jpg)";
});

//via chatgpt eigen onderzoek//
document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('audioElement');
    const audioControlButton = document.getElementById('audioControlButton');

    audioControlButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.currentTime = 14;
            audioElement.play();
            audioControlButton.textContent = 'Stop Audio';
            partyTime.textContent = "PartyTime!!";
            partyTime.style.display = "block";
        } else {
            audioElement.pause();
            audioElement.currentTime = 0; // reset audio to the beginning
            audioControlButton.textContent = 'Play Audio';
            partyTime.style.display = "none";
        }
    });
});
//

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const submitButton = document.getElementById('submitButton');
    const displayText = document.getElementById('displayText');

    submitButton.addEventListener('click', () => {
        const userInput = inputText.value;
        displayText.textContent = userInput;
        inputText.value = ''; 
    });
});
