"use strict";



const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() { 
        personalMovieDB.count =  +prompt("How many movies did you watch?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies did you watch?", ""); 
        } 
    },
    rememberMyFilms : function() {
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
    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count < 10) {
            alert("You've watch not many movies");
        } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
            alert("You have good rate");
        } else if (numberOfFilms > 30){
            alert("You like movies!!!");
        } else {
            alert("There is an error");
        }
    },
    showMyDB : function (hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGender : function() {
        for (let i = 1; i <=3; i++) {
            let movieGender = prompt(`What is your ${i} favorite genres?`, "");
            if (movieGender == "" || movieGender == null) {
                i--;
             }             
            personalMovieDB.genres[i - 1] = movieGender;
        }
        personalMovieDB.genres.forEach((item, i, array) => console.log(`Your ${i + 1} favorite gender is  ${item} in ${array}`)) 
    }
};

