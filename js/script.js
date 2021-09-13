const numberOfFilms = +prompt("How many movies did you watch?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
for (let i = 0; i < 2; i++) {
    let lastMovie = prompt("What is your last whatched movie?", "");    
    let rateMovie = prompt("What is your rate of last whatched movie?", "");
    personalMovieDB.movies[lastMovie] = rateMovie;
}
console.log(personalMovieDB);