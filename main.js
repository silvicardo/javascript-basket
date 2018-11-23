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

// interrogaIlDatabasePerId(parseInt(prompt('Digita id Giocatore desiderato')));

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

  var statisticaCreata = false;
  while (statisticaCreata != true) {
    //Genero Punteggio Totale Casuale
    statistiche.punteggioPartita = generaNumeroCasualeTra(20,80);

    //Genero una percentuale tiri da 3 riuscita
    var percentualeTiriDa3Casuale = generaNumeroCasualeTra(30,60);

    //Calcolo punti fatti con tiri da 3 ad Intero
    var puntiTiriDa3ConPerScelta = parseInt(statistiche.punteggioPartita / 100 * percentualeTiriDa3Casuale);
    var tiriDa2Sottratti = statistiche.punteggioPartita - puntiTiriDa3ConPerScelta;

    // console.log('Punteggio da tiri da 3 estratti : ' + puntiTiriDa3ConPerScelta);

    if (puntiTiriDa3ConPerScelta % 3 != 0) {
      // console.log(puntiTiriDa3ConPerScelta + ' non divisibile per 3');
      // console.log('nuovaEstrazione');
    } else {
      // console.log('Punteggio da tiri da 2 estratti : ' + tiriDa2Sottratti);
      if (tiriDa2Sottratti % 2 != 0) {
        // console.log(tiriDa2Sottratti + ' non divisibile per 2');
        // console.log('nuovaEstrazione');
      } else {
        // console.log('passato');
        statistiche.tiriDa3Riusciti = puntiTiriDa3ConPerScelta / 3;
        statistiche.tiriDa2Riusciti = tiriDa2Sottratti / 2;
        statistiche.puntiConTiriDa3Riusciti = puntiTiriDa3ConPerScelta;
        statistiche.puntiConTiriDa2Riusciti = tiriDa2Sottratti ;
        statistiche.percentualeTiriDa3InPartita = percentualeTiriDa3Casuale + '%';
        statistiche.percentualeTiriDa2InPartita = (100 - percentualeTiriDa3Casuale) + '%';

        // console.log('percentuale tiri da 3 in partita: ' + statistiche.percentualeTiriDa3InPartita + '%');
        // console.log('percentuale tiri da 2 in partita: ' + statistiche.percentualeTiriDa2InPartita + '%');
        statisticaCreata = true;
        // console.log(statistiche);
      }
    }
  }

  return statistiche;
}
