console.log("Hallo Berry!")
let bericht = "Welkom Berry!"
let kop = document.querySelector("h1")

const introductie = document.querySelector("h1")
function verandertitel() {
    kop.textContent = bericht
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
/*
let strik= document.querySelector("#strik")
let hoed= document.querySelector("#hoed")
let bril= document.querySelector("#bril")

let menuStrik = document.querySelector("#menuStrik");
let menuHoed = document.querySelector("#menuHoed")
let menuBril = document.querySelector("#menuBril")

menuStrik.addEventListener("click", ()=>{
    strik.classList.toggle("zichtbaar")
})
menuHoed.addEventListener("click", ()=>{
    hoed.classList.toggle("zichtbaar")
})
menuBril.addEventListener("click", ()=>{
    bri.classList.toggle("zichtbaar")
})

*/

document.addEventListener('DOMContentLoaded', () => {
    // Functie om de zichtbaarheid van een accessoire te toggelen
    const toggleVisibility = (element) => {
        element.classList.toggle('onzichtbaar');
        element.classList.toggle('zichtbaar');
    };

    // Event listeners voor accessoires in het menu (bril, hoed, strik)
    const accessoiresMenuItems = document.querySelectorAll('.beerAccessoiresMenu');
    accessoiresMenuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            const accessoireId = menuItem.id.replace('menu', '');
            const accessoireElement = document.getElementById(accessoireId);
            toggleVisibility(accessoireElement);
        });
    });
});


const achtergrondMenuItems = document.querySelectorAll('.achtergrond-menu');
achtergrondMenuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const newBackground = menuItem.getAttribute('data-src');
        document.body.style.backgroundImage = `url(${newBackground})`;
    });
});


