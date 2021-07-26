let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 0) {
      // unsent
      console.log("unsent")
    } else if(xhr.readyState == 1) {
      // open called
      console.log("open called")
    } else if (xhr.readyState == 2) {
      // response headers received
      console.log("response headers received")
    } else if (xhr.readyState == 3) {
      // response is loading (a data packet is received)
      console.log("response is loading")
    } else if (xhr.readyState == 4) {
        console.log("xhr object = ", xhr)
      // request complete
      console.log("request complete")
      if (xhr.status != 200) { // analyze HTTP status of the response
          console.log('error')
        } else if (xhr.status === 200) {
            let users = JSON.parse(xhr.response);
            let list = document.querySelector(".list");
            users.forEach(user => {
                let li = document.createElement("li");
                li.innerHTML = user["name"] + ", " + user["email"] + ", " + user["address"]["city"];
                list.appendChild(li);
            });
        }
    }
  };