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

//TEST FUNZIONALITA' CREAZIONE DATABASE CON ID E
//STATISTICHE PER GIOCATORE DINAMICI
var databaseGiocatori = generaDatabaseGiocatori(10);
console.log(databaseGiocatori);

//GESTISCI UI
setTimeout(function (){

  // Something you want delayed.
  interroga(databaseGiocatori, prompt('Digita id Giocatore desiderato'));
}, 3000);

// FUNZIONI

function interroga(database, id) {

    //Da inserire eventuale validazione

    var risultatoQuery = databaseContiene(database, id);
    console.log(risultatoQuery);
    if (risultatoQuery == -1) {
      stampaASchermoErrore();
    } else {
      stampaASchermoGiocatoreDa(risultatoQuery, database);
    }
}

function stampaASchermoErrore() {
  alert('Nessun Giocatore trovato con questo id.');
}

function stampaASchermoGiocatoreDa(indice, database) {

  var giocatore = database[indice];

  console.log(giocatore.id);

  for (var statKey in giocatore.statistiche) {
    console.log(giocatore.statistiche[statKey]);
  }

}

function databaseContiene(database, id) {

  for (var i = 0; i < database.length; i++) {
    if (database[i]['id'] == id) {
      return i;
      }
    }
  return -1;
}

function generaDatabaseGiocatori(nrGiocatori) {
  var arrayGiocatori = [];

  var arrayId = generaIdCasualiDifferentiPer(nrGiocatori);

  for (var i = 0; i < arrayId.length; i++) {
    arrayGiocatori.push(generaNuovoOggettoGiocatoreRandomCon(arrayId[i]));
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

function generaNuovoOggettoGiocatoreRandomCon(id) {

  var nuovoGiocatore = {
    id: id,
  }

  nuovoGiocatore.statistiche = generaOggettoStatistiche();

  return nuovoGiocatore;
}

function generaOggettoStatistiche() {

  var statistiche = {
    rimbalzi : generaNumeroCasualeTra(1,30), //Numero di rimbalzi
    falli : generaNumeroCasualeTra(0, 5) //Falli
  };

  //Creazione restanti parametri delle statistiche
  var statisticaCreata = false;

  while (statisticaCreata != true) {
    //Genero Punteggio Totale Casuale
    statistiche.punteggioPartita = generaNumeroCasualeTra(20,80);

    //Genero una percentuale tiri da 3 riuscita
    var percentualeTiriDa3Casuale = generaNumeroCasualeTra(30,60);

    //Calcolo punti fatti con tiri da 3 e 2 ad Intero
    var puntiTiriDa3ConPerScelta = parseInt(statistiche.punteggioPartita / 100 * percentualeTiriDa3Casuale);
    var tiriDa2Sottratti = statistiche.punteggioPartita - puntiTiriDa3ConPerScelta;

    if (puntiTiriDa3ConPerScelta % 3 == 0) {
      if (tiriDa2Sottratti % 2 == 0) {
        statisticaCreata = true;
      }
    }
  }

  //Assegnazione parametri generati
  statistiche.tiriDa3Riusciti = puntiTiriDa3ConPerScelta / 3;
  statistiche.tiriDa2Riusciti = tiriDa2Sottratti / 2;
  statistiche.puntiConTiriDa3Riusciti = puntiTiriDa3ConPerScelta;
  statistiche.puntiConTiriDa2Riusciti = tiriDa2Sottratti ;
  statistiche.percentualeTiriDa3InPartita = percentualeTiriDa3Casuale + '%';
  statistiche.percentualeTiriDa2InPartita = (100 - percentualeTiriDa3Casuale) + '%';

  return statistiche;
}
