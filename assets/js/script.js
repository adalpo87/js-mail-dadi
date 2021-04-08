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
