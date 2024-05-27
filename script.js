console.log("Hallo Berry!")
let bericht = "Welkom Berry!"
let kop = document.querySelector("h1")

const introductie = document.querySelector("h1")
function verandertitel() {
    kop.textContent = bericht
    kop.classList.add("slide-in")
}
introductie.addEventListener("mouseenter", verandertitel)

function showHint() {
    hint.textContent = "Klik op de items om je beer aan te passen!"
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hint.textContent = ""
}
showHint()


const donkereBeerOptie = document.querySelector("#donkerbruin")
const lichteBeerOptie = document.querySelector("#lichtbruin")
const koffieBeerOptie = document.querySelector("#koffiebruin")

const groteKoffieBeer = document.querySelector("#koffiebruinBeer");
const groteDefaultBeer = document.querySelector("#defaultBeer")
const groteDonkereBeer = document.querySelector("#donkerbruinBeer")

function koffieBeer() {
    groteKoffieBeer.classList.add("zichtbaar")
    groteKoffieBeer.classList.remove("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
}

koffieBeerOptie.addEventListener('click', koffieBeer);

function donkerBeer() {
    groteDonkereBeer.classList.add("zichtbaar")
    groteDonkereBeer.classList.remove("onzichtbaar")
    groteKoffieBeer.classList.add("onzichtbaar")
    groteKoffieBeer.classList.add("onzichtbaar")
}

donkereBeerOptie.addEventListener('click', donkerBeer);

function lichteBeer() {
    groteDefaultBeer.classList.add("zichtbaar")
    groteDefaultBeer.classList.remove("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
    groteDonkereBeer.classList.add("onzichtbaar")
}

lichteBeerOptie.addEventListener('click', lichteBeer);

function lichtedonkerBeer() {
    groteDonkereBeer.classList.add("zichtbaar")
    groteDonkereBeer.classList.remove("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
    groteDefaultBeer.classList.add("onzichtbaar")
}

donkereBeerOptie.addEventListener('click', lichtedonkerBeer);

let strik= document.querySelector("#strik")
let hoed= document.querySelector("#hoed")
let bril= document.querySelector("#bril")

let menuStrik = document.querySelector("#menuStrik");
let menuHoed = document.querySelector("#menuHoed")
let menuBril = document.querySelector("#menuBril")

menuStrik.addEventListener("click", ()=>{
    strik.classList.toggle("show")
})
menuHoed.addEventListener("click", ()=>{
    hoed.classList.toggle("show")
})
menuBril.addEventListener("click", ()=>{
    bril.classList.toggle("show")
})

let cropTop= document.querySelector("#croptop")
let shirt= document.querySelector("#streepjes")
let sjaal= document.querySelector("#sjaal")

let menuCroptop = document.querySelector("#menuCropTop");
let menuStreepjes = document.querySelector("#menuStreepjes")
let menuSjaal = document.querySelector("#menuSjaal")

menuCroptop.addEventListener("click", ()=>{
    cropTop.classList.toggle("show")
})
menuStreepjes.addEventListener("click", ()=>{
    shirt.classList.toggle("show")
})
menuSjaal.addEventListener("click", ()=>{
    sjaal.classList.toggle("show")
})

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