// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo funzione per stampare 5 numeri random
const randomNumbers = document.getElementById("random-numbers");
let randNum;

for (let i =1; i <=5; i++) {
    randNum = getRndInteger(1, 100);
    console.log(i, randNum);
    randomNumbers.innerHTML += (` - ${randNum} - `);
}

