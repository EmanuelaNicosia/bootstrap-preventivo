const oreDiLavoro = 10;
const prezzoBackend = 20.50; // 1
const prezzoFrontend = 15.30; // 2
const prezzoAnalisi = 33.60;  // 3

let buttonPreventivo = document.getElementById('preventivo');
buttonPreventivo.addEventListener("click", calcolaPreventivo);

function calcolaPreventivo() {
    let prezzoFinale = 0;

    // leggo il valore dalla select con id lavoro
    let tipoLavoro = document.getElementById("lavoro").value;

    // se il lavoro è 1 allora il prezzo sarà oreDiLavoro*prezzoBackend
    if (tipoLavoro == 1) {
        prezzoFinale = oreDiLavoro * prezzoBackend;
    }

    // se il lavoro è 2 allora il prezzo sarà oreDiLavoro*prezzoFrontend
    if (tipoLavoro == 2) {
        prezzoFinale = oreDiLavoro * prezzoFrontend;
    }

    // se il lavoro è 3 allora il prezzo sarà oreDiLavoro*prezzoAnalisi
    if (tipoLavoro == 3) {
        prezzoFinale = oreDiLavoro * prezzoAnalisi;
    }

    // gestisco errore

    console.log(prezzoFinale);

    // leggo il valore dalla input con id promo
    let codicePromo = document.getElementById("promo").value;



    // se il valore di promo è tra questi YHDNU32,JANJC63, PWKCN25, SJDPO96, POCIE24
    const scontoPromo = 25;
    if (codicePromo == 'YHDNU32' || codicePromo == 'JANJC63' || codicePromo == 'PWKCN25' || codicePromo == 'SJDPO96' || codicePromo == 'POCIE24') {
        // allora applico lo sconto del 25% e aggiorno il prezzo finale

        let daScontare = prezzoFinale / 100 * scontoPromo;
        prezzoFinale = prezzoFinale - daScontare;
    }

    // altrimenti se non è valido segnalo che non ho applicato nessuno sconto


    // recupero l'elemento HTML con id prezzoFinale
    let risultato = document.getElementById("prezzoFinale");
    // assegno il prezzo finale alla poprietà innerHTML
    risultato.innerHTML = prezzoFinale.toFixed(2);



}