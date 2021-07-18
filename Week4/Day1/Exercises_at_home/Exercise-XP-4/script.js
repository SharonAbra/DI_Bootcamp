let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

function addOrdnal() {
let newList = [];

}

color.forEach((item, position) => {
    let start = ordinal[0];
    if (position == 0) {
        start = ordinal[1];
    } else if (position == 1){
        start = ordinal[2];
    } else if (position == 2) {
        start = ordinal[3];
    }
    console.log(`${position+1}${start} choice is ${item}.`);
});