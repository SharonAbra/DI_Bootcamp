const validate = (event)=> {
    event.preventDefault();
    let username = document.getElementById("username").value;
    if (username.length < 4) {
        alert("username must be at least 4 characters long");
    } else {
        generateTable()
    }
}

const generateTable = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const { username } = Object.fromEntries(searchParams);
    const { password } = Object.fromEntries(searchParams)
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let row = document.createElement("tr");
    let cellUser = document.createElement("td");
    let cellPass = document.createElement("td");
    cellUserText = document.createTextNode("username is: "+username);
    cellPassText = document.createTextNode("password is: "+password);
    cellUser.appendChild(cellUserText);
    cellPass.appendChild(cellPassText);
    row.appendChild(cellUser);
    row.appendChild(cellPass);
    tbody.appendChild(row);
    table.appendChild(tbody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");
}

let form = document.forms[0];
form.addEventListener("submit", validate);

