'use strict'
const React         = require('react');
const ReactDOM      = require('react-dom');
const $             = require('jquery');
const CurrentMovies = require('./currentmovies.js');



const Showtimes = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Movie Showtimes</h2>
          <CurrentMovies />
      </div>
    )
  }
})




module.exports = Showtimes;
