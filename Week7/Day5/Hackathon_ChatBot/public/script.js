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
        setTimeout(()=> {
            // add server response to dialog box
            let span = document.createElement("span");
            span.setAttribute("class", "span");            
            dialogBox.appendChild(span)
            dialogBox.appendChild(linebreak2);
            bubble.classList.add("display");
            // make the text clickable if media is sent from the server
                if (data.data.split(' ').includes('pic')) {
                    let child2 = document.createTextNode(data.data);
                    span.append(child2);
                    let robot = document.querySelector(".robot")
                    robot.addEventListener("click", ()=> {
                        let source = data.object;
                        let image = document.createElement("img");
                        image.setAttribute("src", source);
                        image.setAttribute("class", "gif");
                        dialogBox.innerHTML = "";
                        dialogBox.appendChild(image);
                        setTimeout(()=>{
                            dialogBox.innerHTML = " ";
                            child3 = document.createTextNode('wanna see another one?');
                            let span2 = document.createElement("span");
                            span2.append(child3);
                            dialogBox.appendChild(span2)
                            dialogBox.appendChild(linebreak2);
                        }, 7000)
                    });
                } else {
                    let child2 = document.createTextNode(data.data);
                    dialogBox.appendChild(span)
                    span.append(child2);
                    dialogBox.appendChild(linebreak2);
                }
        }, 800)
    }) 
    .catch(e => console.log(e))
});