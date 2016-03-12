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
  WHERE m.movie_id=$1
  GROUP BY m.movie_id;`, [req.params.movie_id])
  .then(function(data) {
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

// add a new movie
function addMovie(req, res, next) {
  db.none(`INSERT INTO movies (imdbID, poster, title, year, rated, director, actors, plot)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
    [req.body.imdbID, req.body.Poster, req.body.Title, req.body.Year, req.body.Rated, req.body.Director, req.body.Actors, req.body.Plot])
    .then(function (data) {
      res.rows = data;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
}

// remove a movie
function deleteMovie(req, res, next) {
  db.none(`DELETE FROM showtimes
  WHERE movie_id=$1;`),
  [req.params.movie_id])
    .then(function(data) {
      res.rows = data;
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
