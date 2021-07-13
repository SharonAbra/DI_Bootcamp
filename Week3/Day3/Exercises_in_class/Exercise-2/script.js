const box = document.getElementById('box');
let id;
let left = 0;
let screenWidth = window.screen.availWidth;
function move() {
  id = setInterval(function(){
    if(left > screenWidth-20)
      stop()
    left += 5;
    // box.style.left = left + 'px';
    box.style.left = `${left}px`
  },5)
}
function stop() {
  clearInterval(id)
}

