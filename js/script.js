"use strict";
let numberOfFilms;
function start () {    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
       numberOfFilms = +prompt("How many movies did you watch?", ""); 
    } 
}
//start();
 
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}
showMyDB(personalMovieDB["privat"]);

function rememberMyFilms() {
    for( let i = 0; i < 2; i++) {
    let lastMovie = prompt("What is your last whatched movie?", ""),
        rateMovie = prompt("What is your rate of last whatched movie?", "");
    if (lastMovie === null || lastMovie === ""|| lastMovie.length > 50 || 
        rateMovie === null || rateMovie === "" || rateMovie.length > 50) {
            i--;
    } else{ 
        personalMovieDB.movies[lastMovie] = rateMovie;
    }
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You've watch not many movies");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert("You have good rate");
    } else if (numberOfFilms > 30){
        alert("You like movies!!!");
    } else {
        alert("There is an error");
    }
}
//detectPersonalLevel();

function writeYourGender() {
    for (let i = 1; i <=3; i++) {
        let movieGender = prompt(`What is your ${i} favorite genres?`);
        personalMovieDB.genres[i - 1] = movieGender;
    }
}
writeYourGender();

