// let mainFunction = (item) => {
//     let firstPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof item == "string") {
//                 resolve(item.toUpperCase())
//             } else{
//                 reject(item)
//             }
//         }, 5000);
//     })
//     return firstPromise;
// }
// let myPromise = mainFunction(prompt("talk to me honey"))
// myPromise
//     .then(upperCaseString => console.log(upperCaseString.repeat(2)))
//     .catch(error => console.log(error))
//     .finally(() => console.log("congratulation"))



function requestData () {
	fetch('https://api.giphy.com/v1/gifs/random?q=sun&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then(response => {
    	if(response.status == 200){
    		return response.json();
    	} else {
    		throw new Error("not 200");
    	}
    })
    .then(jsonData => {
    	console.log(jsonData);
        displayUser(jsonData);
    })
    .catch(error => {
        console.log("In the catch",error);
    });
}

const displayUser = (event) => {
    event.preventDefault();
    let container = document.querySelector(".container");
    let source = requestData()["data"]["url"];
    let image = document.createElement("img");
    image.setAttribute("src", source);
    container.appendChild(image);
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerHTML = "Delete gif";
    container.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
    container.removeChild(image);
    container.removeChild(deleteButton);
    })
}

const removeAllGifs = () => {
    let container = document.querySelector(".container");
    document.body.removeChild(container);
}

const button = document.querySelector(".go");
button.addEventListener("click", displayUser);
let input = document.querySelector(".gif");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
});

const deleteAllButton = document.querySelector(".deleteall");
deleteAllButton.addEventListener("click", removeAllGifs);
