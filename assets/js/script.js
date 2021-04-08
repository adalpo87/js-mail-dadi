//MAIL
//Chiedi all'utente la sua email.
var request = prompt("Salve, inserisci qui la tua email")
//creare un array con all'interno più email (es. 10 email)
var utenti = [
  "francesco@gmail.com",
  "ale@gmail.com",
  "davide@gmail.com",
  "simo@gmail.com",
  "angelica@gmail.com",
  "giorgia@gmail.com",
  "giulio@gmail.com",
  "filippo@gmail.com",
  "mario@gmail.com",
  "gianni@gmail.com"
];

var email_presente = false;
//creare un ciclo for per la ricerca

for(var i = 0; i < utenti.length; i++) {
  var utente = utenti[i]
if (request === utente)
   email_presente = true;
}
if (email_presente) {
  document.getElementById('log_email').innerHTML = "La tua email " + request + " è presente"
}else{
  document.getElementById('log_email').innerHTML = "La tua email " + request + " non è presente nei nostri database"
}





//ESERCIZIO GIOCO DEI DADI

// PROMPT CON INSERIMENTO NOME GIOCATORE 
var player = prompt ('Come ti chiami?');



// MATH RANDOM CHE CREA UN UN NUMERO RANDOM DA 1 A 6
var dado_x = ((Math.random() * 5) + 1).toFixed(0);

// MATH RANDOM DA ASSEGNARE AL BOT
var dado_y = ((Math.random() * 5) + 1).toFixed(0);

var risultato = "";

//CREARE IF CON X > Y VINCE
if ( dado_x > dado_y){
  risultato = "Complimenti hai vinto."
}
// IF ELSE X < Y PERDE
if (dado_x < dado_y) {
  risultato = "Mi dispiace hai perso."
} else {
  risultato = "E' un pareggio"
}

document.getElementById('card').innerHTML = "Ciao " + player + ", il tuo numero è " + dado_x ;

document.getElementById('card2').innerHTML = risultato + " Il tuo avversario ha ottenuto un punteggio di " + dado_y + ".";


