// let convertisseurRomain = function(num) {
//
//     let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//     let chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//     let iRom = 0;
//     for(let iChi = 0; iChi <= valeurDecimale.length; iChi++){
//         valeurDecimale[iChi] = chiffreRomains[iRom];
//         if (num === valeurDecimale[iChi]){
//             return chiffreRomains[iRom];
//         }
//         iRom++;
//     }
//
// }



let ask = parseInt(prompt('Choisissez un chiffre a convertir en chiffre romain'));
let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
let chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

function convertisseurRomain(num){
    let str = "";
    for (let i = 0; i < valeurDecimale.length; ++i ){
        while ( num >= valeurDecimale[i] ){
            num -= valeurDecimale[i];
            str += chiffreRomains[i];
        }

        if ( num === 0 ){
            break;
        }
    }

return str;
}
if(isNaN(ask)){
    alert('Veuillez rentrer un nombre');
}
else {
    alert(ask + ' est égal à ' + convertisseurRomain(ask) + ' en chiffres romains');
}


// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir des le nombre passé en paramètre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;
