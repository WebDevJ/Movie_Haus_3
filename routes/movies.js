const express = require('express');
const movies  = express.Router();
const db      = require('../db/pg');
const omdb    = 'http://www.omdbapi.com/?';
const request = require('request');

movies.route('/:movie_id')
  .get(db.showOneMovie, (req, res) => {
    res.send(res.rows)
  })

  .put((req, res) => {
    res.send(res.rows)
  })

  .delete(db.deleteMovie, (req, res) => {
    res.send(res.rows)
  })

movies.route('/search/:t')
  .get((req, res) => {
    request({url:'http://www.omdbapi.com/?', qs:{t: req.params.t}, json:true},
      function(err, apires, body) {
        res.send(body)
    });
  })

movies.route('/')
  .get(db.showMovies, (req, res) => {
    res.send(res.rows)
  })
  .post(db.addMovie, (req, res) => {
    res.send(res.rows)
  })


module.exports = movies;
