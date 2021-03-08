// 1 -- Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 chiedo all'utente una parola
var parolaUtente = prompt("Inserisci una parola");

// 2 Creare una funzione per capire se la parola inserita è palindroma
function palind(parola) {
  var newParola = "";

  for (var i = parola.length -1 ; i >= 0; i --) {
    newParola += parola[i];
  }
  return newParola;
}

// 3 stampo il risutlato in console
var palindroma = palind(parolaUtente);

if ( parolaUtente === palindroma ) {
console.log("la parola inserita è palindroma");
} else {
  console.log("la parola inserita non è palindroma");
}
