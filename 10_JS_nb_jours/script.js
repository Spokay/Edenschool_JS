let mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
let nbDeJoursParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let moisChoisis = prompt('Choisissez un mois');
moisChoisis.toLowerCase();

if (isNaN(moisChoisis)){
    for (let i = 0; i < mois.length; i++){
        if(moisChoisis === mois[i]){
            document.write(mois[i] + ' comporte ' + nbDeJoursParMois[i] + ' jours');
        }
    }
}

else {
    alert('Veuillez choisir un mois');
}


