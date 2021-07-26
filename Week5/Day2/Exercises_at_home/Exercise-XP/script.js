let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
    console.log(xhr.response);
    loadXml(xhr.response);
  }
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
};

xhr.onerror = function() {
  console.log('Error something wrong###');
};

function loadXml() {
  let list = document.querySelector(".list");
  let giphArrayOfObjects = xhr.response["data"];
  giphArrayOfObjects.forEach(object => {
  let li = document.createElement("li");
  li.innerHTML = object["url"];
  list.appendChild(li);
  });
}

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// xhr.responseType = 'json';
// xhr.send();
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 0) {
//     console.log("unsent")
//   } else if(xhr.readyState == 1) {
//     console.log("open called")
//   } else if (xhr.readyState == 2) {
//     console.log("response headers received")
//   } else if (xhr.readyState == 3) {
//     console.log("response is loading")
//   } else if (xhr.readyState == 4) {
//       console.log("xhr object = ", xhr)
//       console.log("request complete")
//       if (xhr.status != 200) {
//           console.log('error')
//         } else if (xhr.status === 200) {
//             let list = document.querySelector(".list");
//             let giphArrayOfObjects = xhr.response["data"];
//             giphArrayOfObjects.forEach(object => {
//               let li = document.createElement("li");
//               li.innerHTML = object["url"];
//               list.appendChild(li);
//             });
//     }
//   }
// }