
let numberOfStages = parseInt(prompt('Combien d\'étages pour le sapin'));
let bonusStars = 0;

for (let stagesI = 0; stagesI < numberOfStages; stagesI++){
    document.write('<table style="display: flex; justify-content: center; text-align: center">');
    let totalStars = numberOfStages + bonusStars;
    for(let linesI = bonusStars; linesI <= totalStars; linesI++){
        document.write('<tr style="display: flex; justify-content: center">');
        for (let starsI = 0; starsI <= linesI; starsI++){
            document.write('<td>*</td>');
        }
        document.write('</tr>');
    }
    bonusStars++;
    document.write('<table>')
}

for (let i = 0; i < bonusStars; i++){
    document.write('<p style="display: flex; justify-content: center; margin: 0">|</p><br>');
}


// for (let stagesI = 0; stagesI < numberOfStages; stagesI++){
//     document.getElementById('sapin').innerHTML += '<div class="stages">';
//     let totalStars = numberOfStages + bonusStars;
//     for(let linesI = bonusStars; linesI <= totalStars; linesI++){
//         document.getElementsByClassName('stages').innerHTML += '<div class="lines">';
//         for (let starsI = 0; starsI <= linesI; starsI++){
//             document.getElementsByClassName('lines').innerHTML += '<p style="display: inline-block">*</p>';
//         }
//         document.getElementsByClassName('stages').innerHTML += '</div>';
//     }
//     bonusStars++;
//     document.getElementById('sapin').innerHTML += '</div>';
// }
//
// for (let i = 0; i < bonusStars; i++){
//     document.write('| <br>');
// }