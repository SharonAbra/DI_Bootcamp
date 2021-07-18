function winBattle(){
    return true;
}

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }


let experiencePoints = function experiencePoints() {
    return (winBattle() ?  10 : 1);
}

console.log(experiencePoints());