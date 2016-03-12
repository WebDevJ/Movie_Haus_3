'use strict';

require('dotenv').config();

var pgp = require('pg-promise')({
    // Initialization Options
});

// connection path
// DATABASE_URL in .env file: DATABASE_URL=postgres://USERNAME:PASSWORD@localhost/DBNAME
var cn = process.env.DATABASE_URL;

var db = pgp(cn);

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

// export it
module.exports.showMovies = showMovies;
