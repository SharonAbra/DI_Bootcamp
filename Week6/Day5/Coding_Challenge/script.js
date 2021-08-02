function pageScroll() {
    window.scrollBy(0,1.3);
    scrolldelay = setTimeout(pageScroll,1);
}

pageScroll();

document.querySelector("button").addEventListener("click", function() {window.scrollTo(0, 0);});