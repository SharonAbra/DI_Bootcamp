// event listener for when the user submits the input
document.forms[0].addEventListener("submit", function(e) {
    // prevent page reload
    e.preventDefault();
    const dialogBox = document.querySelector(".dialog");
    let input = document.querySelector(".input").value;
    // clean the input
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
    // reset input field - required due to prevent default
    document.querySelector(".input").value = "";
    // add user input to dialog box
    dialogBox.append(input);
    const linebreak = document.createElement("br");
    dialogBox.append(linebreak);
    // get response from server
    fetch(`http://localhost:3000/input?input=${text}`)
    .then(data => {
        // hold server response before appending
        setTimeout(function() {
            // add server response to dialog box
            dialogBox.append(data["a"]);
        }, 800)
    }) 
    .catch(e => console.log(e))
});

