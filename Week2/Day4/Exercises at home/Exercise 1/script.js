// Part |

function infoAaboutMe () {
	console.log("My name is Sharon, and I like coding")
};

infoAaboutMe();

// Part ||

function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
	console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite coloe is ${personFavoriteColor}.`);
	if (personHobbies) {
		console.log("Your hobbies are: ");
		for (i = 0; i < personHobbies.length; i++)
			console.log(personHobbies[i]);
	}
};

infoAboutPerson("Bill", 54, "Blue");

// Part||

infoAboutPerson("David", 45, "blue", ["tennis", "painting"])

infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])