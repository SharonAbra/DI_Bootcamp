let hxr;
const showGif = (event) => {
    event.preventDefault();
    let input = document.querySelector(".gif").value;
    let form = document.forms[0];
    form.reset();
    xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
      if(xhr.status != 200){
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
      }
      else{
        loadXml(xhr.response);
      }
    }
}

const loadXml = () => {
   let container = document.querySelector(".container");
   let source = xhr.response["data"][0]["images"]["downsized"]["url"];
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
   });
}

const removeAllGifs = () => {
    let container = document.querySelector(".container");
    document.body.removeChild(container);
}

const button = document.querySelector(".go");
button.addEventListener("click", showGif);
let input = document.querySelector(".gif");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });

const deleteAllButton = document.querySelector(".deleteall");
deleteAllButton.addEventListener("click", removeAllGifs);
