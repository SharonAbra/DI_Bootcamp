const users = { user1: 18273, user2: 92833, user3: 90315 };
const list = Object.entries(users);
console.log(list);

const double = Object.values(users).map(value => value = value*2);
console.log(double);