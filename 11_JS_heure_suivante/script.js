const maxH = 24;
const maxM = 60;
const maxS = 60;

let heures = parseInt(prompt('Veuillez entrer une heure'));
let minutes = parseInt(prompt('Veuillez entrer les minutes'));
let secondes = parseInt(prompt('Veuillez entrer les secondes'));


if (!isNaN(heures) && !isNaN(minutes) && !isNaN(secondes)){
    if (heures > maxH){
        alert('Il n\'y a pas autant d\'heures dans une journée');
    }
    else if (minutes > maxM){
        alert('Il n\'y a pas autant de minutes dans une heure');
    }
    else if (secondes > maxS){
        alert('Il n\'y a pas autant de secondes dans une minute')
    }
    else if(heures == 23 && minutes == 59 && secondes == 59){
        heures = 0;
        minutes = 0;
        secondes = 0;
        alert(heures + "h " + minutes + "m " + secondes + "s");
    }
    else if(minutes == 59 && secondes == 59){
        heures++;
        minutes = 0;
        secondes = 0;
        alert(heures + "h " + minutes + "m " + secondes + "s");
    }
    else if(secondes == 59){
        minutes++;
        secondes = 0;
        alert(heures + "h " + minutes + "m " + secondes + "s");
    }
    else {
        secondes++;
        alert(heures + "h " + minutes + "m " + secondes + "s");
    }
}
else {
    alert('Veuillez renseigner des nombres');
}