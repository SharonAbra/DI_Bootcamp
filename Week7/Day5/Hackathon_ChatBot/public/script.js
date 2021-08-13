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
    let child = document.createTextNode(input);
        // if dialog box is full - clear it
        if (dialogBox.childElementCount > 13) {
            dialogBox.innerHTML = "";
        }
    dialogBox.appendChild(child);
    const linebreak = document.createElement("br");
    const linebreak2 = document.createElement("br");
    dialogBox.appendChild(linebreak);
    // get response from server
    fetch(`http://localhost:3000/input?input=${text}`)
    
    .then(response => response.json())
    .then(data => {
        bubble = document.querySelector(".bubble");
        bubble.classList.remove("display");
        // hold server response before appending
        setTimeout(function() {
            // add server response to dialog box
            let child2 = document.createTextNode(data.data);
            let span = document.createElement("span");
            span.setAttribute("class", "span");
            span.append(child2);
            dialogBox.appendChild(span)
            dialogBox.appendChild(linebreak2);
            bubble.classList.add("display");
        }, 800)
    }) 
    .catch(e => console.log(e))
});

