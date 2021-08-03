function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,0.1);
}

pageScroll();

document.querySelector(".again").addEventListener("click", function() {window.scrollTo(0, 0);});
document.querySelector(".again_music").addEventListener("click", function() {
const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play()
    window.scrollTo(0, 0);
});

document.querySelector(".stop_music").addEventListener("click", function() {
    const audio = document.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
});


