'use strict'
const React         = require('react');
const ReactDOM      = require('react-dom');
const $             = require('jquery');

const CurrentMovies = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <li>Move and Showtime</li>
        </ul>
      </div>
    )
  }
})

module.exports = CurrentMovies;
