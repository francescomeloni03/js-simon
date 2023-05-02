


const numeriCasuali = [];

while( numeriCasuali.length < 5 ) {

    const numeroCasuale = numeroRandom();

    function numeroRandom () {
        return Math.round(Math.random() * 101);
     
     }

    if( numeriCasuali.includes(numeroCasuale) == false ) {
          numeriCasuali.push(numeroCasuale);
     }
}


console.log("Numeri Casuali", numeriCasuali);
document.getElementById("numeri casuali").innerText = numeriCasuali;


setTimeout(function() {

const numeriDaUtente = [];

     while(numeriDaUtente.length < 5) {

        let numeroDaInserire = numeriDaUtente.length + 1;
        let numero = parseInt( prompt(`Inserisci il ${numeroDaInserire}° numero` ) );

        console.log( numeriDaUtente, numero);
        

          if( numeriDaUtente.includes(numero)==false && numero>0 ) {
              numeriDaUtente.push(numero);
          }

     }
      return numeriDaUtente;


}, 5 * 1000)

  




