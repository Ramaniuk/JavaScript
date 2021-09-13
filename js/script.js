"use strict";
const numberOfFilms = +prompt("How many movies did you watch?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
for (let i = 0; i < 2; i++) {
    let lastMovie = prompt("What is your last whatched movie?", ""),
        rateMovie = prompt("What is your rate of last whatched movie?", "");
    if (lastMovie === null || lastMovie === ""|| lastMovie.length > 50 || 
        rateMovie === null || rateMovie === "" || rateMovie.length > 50) {
            i--;
    } else{ 
        personalMovieDB.movies[lastMovie] = rateMovie;
    }
}

if (personalMovieDB.count < 10) {
    alert("You've watch not many movies");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("You have good rate");
} else if (numberOfFilms > 30){
    alert("You like movies!!!");
} else {
    alert("There is an error");
}
console.log(personalMovieDB);
