// global variables
const dialogBox = document.querySelector(".dialog");
let text;

const getResponse = (e) => {
    // prevent page reload
    e.preventDefault();

   //clean the input to match the data in the  database
    let input = document.querySelector(".input").value;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

    // reset input field - required due to prevent default
    document.querySelector(".input").value = "";
    // if dialog box is full - clear it
    if (dialogBox.childElementCount > 13) {
        dialogBox.innerHTML = "";
    }

     // add user input to dialog box
    let child = document.createTextNode(input);
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
            // create elements on DOM
            let span = document.createElement("span");
            span.setAttribute("class", "span");
            // dialogBox.appendChild(span)
            bubble.classList.add("display");

                if (data.data.split(' ').includes('pic')) {
                // if the user is offered a gif
                    let child2 = document.createTextNode(data.data);
                    span.append(child2);
                    dialogBox.appendChild(span);
                    dialogBox.appendChild(linebreak2);
                    let robot = document.querySelector(".robot")
                    // make the robot clickable to show gif
                    robot.addEventListener("click", () => {showGif(data)});

                } else if (data.data.split(' ').includes('head.')) {
                // if the user is offered a video
                    let child2 = document.createTextNode(data.data);
                    span.append(child2);
                    dialogBox.appendChild(span)
                    let robot = document.querySelector(".robot")
                    // make the robot clickable to show video
                    robot.addEventListener("click", playVideo);

                } else {
                // if no media was sent - add text response to dialog box
                    let child2 = document.createTextNode(data.data);
                    dialogBox.appendChild(span)
                    span.append(child2);
                    dialogBox.appendChild(linebreak2);
                }
        }, 800)
    })
    .catch(e => console.log(e))
};

// function to play a video
const playVideo = () => {
    dialogBox.innerHTML = "";
    // an array of videos to be chosen randomly
    const idArray = ['ZbZSe6N_BXs?autoplay=1&start=4', '2zNSgSzhBfM?autoplay=1&start=70', 'uSD4vsh1zDA?autoplay=1', 'iPUmE-tne5U?autoplay=1', '0mYBSayCsH0?autoplay=1'];
    const position = Math.floor(Math.random() * idArray.length);
    let frame = document.createElement("iframe");
    frame.setAttribute("src", `https://www.youtube.com/embed/${idArray[position]}`);
    frame.setAttribute("width", "400px");
    frame.setAttribute("height", "225px");

    // add video to dialog box
    dialogBox.appendChild(frame);

    // add buttons to dialog box
    let stopButton = document.createElement("button");
    stopButton.innerHTML = "Stop screening";
    stopButton.classList.add("stopButton");
    let anotherButton = document.createElement("button");
    anotherButton.innerHTML = "Another one please";
    anotherButton.classList.add("anotherButton");
    dialogBox.appendChild(stopButton);
    dialogBox.appendChild(anotherButton);

    // define functionality for both buttons
    anotherButton.addEventListener("click", () => {
        dialogBox.innerHTML = "";
        playVideo();
    })

    stopButton.addEventListener("click", ()=> {
        dialogBox.innerHTML = "";
        let linebreak = document.createElement("br");
        let child = document.createTextNode('Great video! wanna see a gif?');
        let span = document.createElement("span");
        span.append(child);
        span.setAttribute("class", "span");
        dialogBox.appendChild(span)
        dialogBox.appendChild(linebreak);
    })
}

// function to show a gif
const showGif = (data) => {
    let source = data.object;
    let image = document.createElement("img");
    image.setAttribute("src", source);
    image.setAttribute("class", "gif");
    dialogBox.innerHTML = "";
    dialogBox.appendChild(image);

    // wait before removing the gif
        setTimeout(()=>{
            dialogBox.innerHTML = "";
            let child = document.createTextNode('wanna see another one?');
            let span = document.createElement("span");
            let linebreak = document.createElement("br");
            span.setAttribute("class", "span")
            span.append(child);
            dialogBox.appendChild(span)
            dialogBox.appendChild(linebreak);
        }, 6000)
};

// event listener for when the user submits the input
document.forms[0].addEventListener("submit", getResponse);

