'use strict'
const React         = require('react');
const ReactDOM      = require('react-dom');
const $             = require('jquery');

const Search = React.createClass({
  render: function(){
    return (
      <div>
        <form ref="moveform">
            <input type="text" ref="moviesearch" size="50" placeholder="search" />
            <button ref="searchbtn" className="searchbtn">Search</button>
        </form>
      </div>
    )
  }
})


module.exports = Search;
