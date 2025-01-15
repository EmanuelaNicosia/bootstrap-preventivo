const oreDiLavoro = 10;
const prezzoBackend = 20.50; // 1
const prezzoFrontend = 15.30; // 2
const prezzoAnalisi = 33.60;  // 3
const scontoPromo = 25;

let form = document.getElementById('formPreventivo');
form.addEventListener("submit", calcolaPreventivo);

function calcolaPreventivo(event) {
    event.preventDefault();

    let prezzoFinale = 0;

    // leggo il valore dalla select con id lavoro
    let tipoLavoro = document.getElementById("lavoro").value;

    if (tipoLavoro == 1) {
        // se il lavoro è 1 allora il prezzo sarà oreDiLavoro*prezzoBackend
        prezzoFinale = oreDiLavoro * prezzoBackend;
    }
    else if (tipoLavoro == 2) {
        // se il lavoro è 2 allora il prezzo sarà oreDiLavoro*prezzoFrontend
        prezzoFinale = oreDiLavoro * prezzoFrontend;
    }
    else if (tipoLavoro == 3) {
        // se il lavoro è 3 allora il prezzo sarà oreDiLavoro*prezzoAnalisi
        prezzoFinale = oreDiLavoro * prezzoAnalisi;
    }
    else {
        // gestisco errore
        alert("Tipo di lavoro non disponibile.")
    }


    // leggo il valore dalla input con id promo
    let codicePromo = document.getElementById("promo").value;


    // se il valore di promo è tra questi YHDNU32,JANJC63, PWKCN25, SJDPO96, POCIE24
    if (codicePromo == 'YHDNU32' || codicePromo == 'JANJC63' || codicePromo == 'PWKCN25' || codicePromo == 'SJDPO96' || codicePromo == 'POCIE24') {
        // allora applico lo sconto del 25% e aggiorno il prezzo finale

        let daScontare = prezzoFinale / 100 * scontoPromo;
        prezzoFinale = prezzoFinale - daScontare;
    }
    else if (codicePromo != '') {
        // il codice inserito non è valido, segnalo che non ho applicato nessuno sconto
        alert("Codice Promozionale non valido.")
    }

    // recupero l'elemento HTML con id prezzoFinale
    let risultato = document.getElementById("prezzoFinale");
    // assegno il prezzo finale alla poprietà innerHTML
    risultato.innerHTML = "&euro; " + prezzoFinale.toFixed(2);
}