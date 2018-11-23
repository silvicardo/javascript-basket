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

var databaseGiocatori = generaDatabaseGiocatori(10);

//GESTISCI UI

interrogaIlDatabasePerId(parseInt(prompt('Digita id Giocatore desiderato')));


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
    arrayGiocatori[i] = generaNuovoOggettoGiocatoreRandomcon(arrayId[i]);
  }

  return arrayGiocatori;
}

function generaIdCasualiDifferentiPer(totaleId){


}

function generaNuovoOggettoGiocatoreRandomcon(id) {


}
