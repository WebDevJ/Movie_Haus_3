'use strict'
const React         = require('react');
const ReactDOM      = require('react-dom');
const $             = require('jquery');
const MovieList = require('./movielist.js');



const Showtimes = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Movie Showtimes</h2>
          <MovieList />
      </div>
    )
  }
})




module.exports = Showtimes;
