/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
console.log("PALINDROME?");

function isPalindrome(parola) {
  // scrivo la parola al contrario e la salvo in una variabile all'interno della funzione 
  var parolaAlContrario = "";
  for (var i = parola.length - 1; i >= 0; i--) {
    parolaAlContrario += parola[i];
  }
  //vedo se è uguale a quella originale e definisco il valore da ritornare
  if (parolaAlContrario == parola) {
    return true;
  } else {
    return false;
  }
}
var parolaUtente = prompt('inserisci una parola');
console.log("Is " + parolaUtente + " a palindrome? " + isPalindrome(parolaUtente));


//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
console.log("PARI O DISPARI");

// funzione per un intero casuale tra un minimo e un massimo inclusi
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var userChoice = prompt("Pari o Dispari?").toLowerCase();
var userNumber = Number(prompt("inserisci un numero da 1 a 5"));
var pcNumber = randomInt(1, 5);

var sum = userNumber + pcNumber;

// funzione per verificare se un numero è pari
function isEven(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// stampiamo passaggi del gioco in console
console.log("L'utente ha scelto " + userChoice);
console.log("Numero dell'utente: " + userNumber);
console.log("Numero del pc: " + pcNumber);
console.log("La loro somma è: " + sum);


// dichiariamo chi ha vinto
if (isEven(sum)) {
  if (userChoice == 'pari') {
    console.log("Ha vinto l'utente con pari");
  } else {
    console.log("Ha vinto il pc con pari");
  }
} else {
  if (userChoice == 'dispari') {
    console.log("Ha vinto l'utente con dispari");
  } else {
    console.log("Ha vinto il pc con dispari");
  }
}

