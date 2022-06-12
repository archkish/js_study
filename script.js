const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies watched?', ''),
      b = prompt('Your rating of the film?', ''),
      c = prompt('One of the last movies watched?', ''),
      d = prompt('Your rating of the film?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);