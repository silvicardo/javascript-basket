/*
Il software deve generare casualmente le statistiche di gioco di
100 giocatori di basket per una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti
informazioni, facendo attenzione che il numero generato abbia
senso:
- Codice Giocatore Univoco (formato da 3 lettere
maiuscole casuali e 3 numeri)
- Numero di punti fatti
- Numero di rimbalzi
- Falli
- Percentuale di successo per tiri da 2 punti
- Percentuale di successo per da 3 punti
Una volta generato il “database”, il programma deve chiedere
all’utente di inserire un Codice Giocatore e il programma
restituisce le statistiche.
*/

// var databaseGiocatori = generaDatabaseGiocatori(10);

//GESTISCI UI

// interrogaIlDatabasePerId(parseInt(prompt('Digita id Giocatore desiderato')));

//TEST FUNZIONALITA' CREAZIONE DATABASE
var databaseGiocatori = generaDatabaseGiocatori(10);

console.log(databaseGiocatori);

// FUNZIONI

function interrogaIlDatabasePerId(id) {

    //Da inserire eventuale validazione

    var risultatoQuery = databaseContiene(id);
    if (risultatoQuery == false) {
      stampaASchermoErrore();
    } else {
      stampaASchermoGiocatoreDa(id);
    }
}

function stampaASchermoErrore() {
  alert('Nessun Giocatore trovato con questo id');
}

function stampaASchermoGiocatoreDa(id) {

  //Utilizzare for in per stampare tutte le statistiche
}

function databaseContiene(id) {

  var trovato = false;
  var indiceRicerca = 0;
  while (trovato == false || database[indiceRicerca] < database.length) {
    for (var chiave in database[i]){
      if (chiave == 'id' && database.includes(database[i][chiave])){
        trovato = true;
      }
    }
  }

}

function generaDatabaseGiocatori(nrGiocatori) {
  var arrayGiocatori = [];
  var arrayId = generaIdCasualiDifferentiPer(nrGiocatori);

  for (var i = 0; i < arrayId.length; i++) {
    arrayGiocatori.push(generaNuovoOggettoGiocatoreRandomcon(arrayId[i]));
  }

  return arrayGiocatori;
}

function generaIdCasualiDifferentiPer(totaleId) {

  var arrayId = [];

  while (arrayId.length <= totaleId - 1 ) {
    var numeriCasuali = generaNumeroCasualeTra(100,999);
    var stringaCasuale = generaStringaConLettereCasuali(3);
    var idCandidato = stringaCasuale + numeriCasuali;
    if(arrayId.includes(idCandidato) == false) {
      arrayId.push(idCandidato);
    }
  }

  return arrayId;
}

function generaStringaConLettereCasuali(numeroCaratteri) {
  var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

  var stringaRisultato = "";

  for (var i = 0; i < numeroCaratteri; i++) {
    var stringaCasuale = alfabeto[generaNumeroCasualeTra(0, alfabeto.length - 1)];
    stringaRisultato += stringaCasuale.toUpperCase();
  }
  return stringaRisultato;
}

function generaNuovoOggettoGiocatoreRandomcon(id) {

  var nuovoGiocatore = {
    id: id,
    puntiFatti: 0, //Numero di punti fatti
    rimbalzi : 0, //Numero di rimbalzi
    falli : 0, //Falli
    rapportoTiriDa2Segnati: 0, //Percentuale di successo per tiri da 2 punti
    rapportoTiriDa3Segnati: 0, //Percentuale di successo per da 3 punti
  }

  return nuovoGiocatore;

}
