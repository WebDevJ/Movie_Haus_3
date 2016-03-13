'use strict';

require('dotenv').config();

const pgp = require('pg-promise')({
    // Initialization Options
});

// connection path
const cn = process.env.DATABASE_URL;

const db = pgp(cn);

// show all movies in the db
function showMovies(req, res, next) {
  db.any(`SELECT m.movie_id, m.title, array_agg(s.showtime) as times
    FROM movies as m
    LEFT JOIN showtimes as s
    ON m.movie_id = s.movie_id
    GROUP BY m.movie_id, m.title
    ORDER BY m.movie_id;`)
    .then(function(data) {
      res.rows = data;
      next();
    })
    .catch(function(error){
      console.error(error);
    })
}

function showOneMovie(req, res, next) {
  db.any(`SELECT m.*, array_agg(s.showtime)
    FROM movies as m
    LEFT JOIN showtimes as s
    ON m.movie_id = s.movie_id
    WHERE m.movie_id=$/movie_id/
    GROUP BY m.movie_id;`, req.params)
    .then(function(movie) {
      res.rows = movie;
      next();
    })
    .catch(function(error){
      console.error(error);
    })
}

// add a new movie
function addMovie(req, res, next) {
  db.one(`INSERT INTO movies (imdbID, poster, title, year, rated, director, actors, language, runtime, plot)
    VALUES($/imdbID/, $/Poster/, $/Title/, $/Year/, $/Rated/, $/Director/, $/Actors/, $/Language/, $/Runtime/, $/Plot/)
    RETURNING *`, req.body)
    .then(function (movie) {
      res.rows = movie;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
}

// remove a movie
function deleteMovie(req, res, next) {
  db.none(`DELETE FROM showtimes
    WHERE movie_id=$/movie_id/;
    DELETE FROM movies
    WHERE movie_id=$/movie_id/;`, req.params)
    .then(function(movie) {
      res.rows = movie;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
}



// export it
module.exports.showMovies = showMovies;
module.exports.addMovie = addMovie;
module.exports.showOneMovie = showOneMovie;
module.exports.deleteMovie = deleteMovie;
