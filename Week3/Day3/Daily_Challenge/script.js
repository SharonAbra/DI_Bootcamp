let answer = document.getElementById('text');
let confirmation = document.createAttribute("onkeydown");
confirmation.value = "return /[a-z]/i.test(event.key)";
answer.setAttributeNode(confirmation);