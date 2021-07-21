let displayStudentInfo = studentObject => {
    let {first, last} = studentObject;
    return `Your full name is ${first} ${last}`;
};

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));