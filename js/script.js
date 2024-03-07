// CREO LA COSTANTE PER IL BOTTONE E LA METTO IN ASCOLTO
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    // SELEZIONO IL VALORE DEGLI INPUT
    const userName = document.querySelector('#user-name').value;
    console.log ('Nome ' + userName);
    const userKm = document.querySelector('#user-km').value;
    console.log ('Km ' + userKm);
    const userAge = document.querySelector('#user-age').value;
    console.log ('Età ' + userAge);
    // AGGIUNGO FORMULA PER IL CALCOLO DEL PREZZO
    const totalPrice = userKm * 0.21;
    console.log ('Prezzo totale senza sconti ' + totalPrice);
    // SCONTI
    const discountUnderAge = (totalPrice * 0.2);
    console.log ('Sconto giovani ' + discountUnderAge);
    const discountOver65 = (totalPrice * 0.4);
    console.log ('Sconto anziani ' + discountOver65);

    // LOGICA DELL'APPLICAZIONE
    let finalPrice;

    if (userAge < 18) {
        finalPrice = (totalPrice - discountUnderAge);
        console.log ('Prezzo finale ' + finalPrice);
    } else if (userAge > 65) {
        finalPrice = (totalPrice - discountOver65);
        console.log ('Prezzo finale ' + finalPrice);
    } else {
        finalPrice = totalPrice;
        console.log ('Prezzo finale ' + finalPrice);
    }

    //STAMPO IL RISULTATO PER L'UTENTE
    document.getElementById('price-result').innerHTML = (finalPrice.toFixed(2));
    document.getElementById('user-name-result').innerHTML = (userName);
    let discount
    if (userAge < 18) {
        discount = ('Sconto minorenne ' + discountUnderAge);
    } else if (userAge > 65) {
        discount = ('Sconto anziano ' + discountOver65);
    } else {
        discount = ('Nessuno sconto');
    }
    document.getElementById('discount-result').innerHTML = (discount);
    document.getElementById('vagon-result').innerHTML = (Math.floor(Math.random() * 10) + 1);
    document.getElementById('code-result').innerHTML = (Math.floor(Math.random() * 10000) + 1);

});
