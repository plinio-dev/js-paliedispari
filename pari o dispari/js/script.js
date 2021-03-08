// 2 -- Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// // 1 L’utente sceglie pari o dispari
var scelta1Utente = prompt("Scegli pari o dispari")
//
// // 2 chiedere un numero da 1 a 5
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"))

// 3 creo una funzione per generare un numero random da 1 a 5
var numeroComp;
function getRandom(min,max) {
    return Math.floor(Math.random()*(max - min +1))+ min;
}

var numeroComp = getRandom(1,5);
console.log("il computer ha scelto " + numeroComp);

// 4 somma dei due numeri
var somma = numeroUtente + numeroComp;
console.log("la somma dei numeri è " + somma);

// 6 creo una funzione per stabilire se i numeri sono pari o dispari
function pariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
var risultato = pariDispari(somma);

// 7 sampo il risultato del vincitore
if (risultato == "pari" && scelta1Utente == "pari"){
  console.log("hai vinto");
} else if (risultato == "dispari" && scelta1Utente == "disapari") {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
