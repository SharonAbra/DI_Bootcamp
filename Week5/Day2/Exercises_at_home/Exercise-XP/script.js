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

/// number 2
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr2.responseType = 'json';
xhr2.send();

xhr2.onload = function(){
  if(xhr2.status != 200){
    console.log(`Error: ${xhr2.status}: ${xhr2.statusText}`);
  }
  else{
    console.log(xhr2.response);
    loadXml2(xhr2.response);
  }
}

xhr2.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
};

xhr2.onerror = function() {
  console.log('Error something wrong###');
};

function loadXml2() {
  let list2 = document.querySelector(".list2");
  let giphArrayOfObjects = xhr2.response["data"];
  giphArrayOfObjects.forEach(object => {
  let li = document.createElement("li");
  li.innerHTML = object["url"];
  list2.appendChild(li);
  });
}