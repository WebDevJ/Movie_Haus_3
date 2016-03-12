const express = require('express');
const movies  = express.Router();
const db      = require('../db/pg');
const omdb    = 'http://www.omdbapi.com/?';
const request = require('request');

movies.route('/')
  .get((req, res) => {
    res.send(res.rows)
  })
  .post((req, res) => {
  })

movies.route('/:movie_id')
  .get((req, res) => {
    res.send(res.rows)
  })

  .put((req, res) => {
    res.send(res.rows)
  })

  .delete((req, res) => {
    res.send(res.rows)
  })

movies.route('/search/:t')
  .get((req, res) => {
    request({url:'http://www.omdbapi.com/?', qs:{t: req.params.t}, json:true},
      function(err, apires, body) {
        res.send(body)
    });
  })

module.exports = movies;
