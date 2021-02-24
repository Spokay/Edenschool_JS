
// ----------------- ÉNONCÉ -----------------
// Créez un Algorithme qui va retourner une phrase.
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.
// ----------------- CONSEILS -----------------
// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.


function retourneLaPhrase(str) {
    let arrayStr = str.split("");
    arrayStr.reverse();
    for (let i = 0; i < arrayStr.length; i++){
        document.write(arrayStr[i]);
    }
}
retourneLaPhrase("Bonjour à tous");