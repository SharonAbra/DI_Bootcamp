class Video {
    constructor(title, uploader, time) {
    this.videoName = title;
    this.personName = uploader;
    this.videoDuration = time;
    }
    watch() {
    console.log(`${this.personName} watched all ${this.videoDuration} seconds of ${this.videoName}!`)
    }
}

let movie = new Video("Die Hard", "Sharon", 1500);
movie.watch();
let movie2 = new Video("Jumanji", "Mor", 2300);
let movie3 = new Video("Gone with the wind", "Emma", 17230);
let movie4 = new Video("Notting Hill", "Assaf", 321500);
let movie5 = new Video("Bridges", "Shosh", 15800);


let listOfObjects = [movie, movie2, movie3, movie4, movie5];
let listOfValues = [];
listOfValues.push(Object.values(movie), Object.values(movie2), Object.values(movie3), Object.values(movie4), Object.values(movie5));


