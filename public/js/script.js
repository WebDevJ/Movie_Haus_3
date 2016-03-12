'use strict'
const React        = require('react');
const ReactDOM     = require('react-dom');
const $            = require('jquery');
const Showtimes    = require('./components/showtimes.js');
const MovieDetails = require('./components/moviedetails.js');
const Search       = require('./components/search.js');
const Results       = require('./components/results.js');

const App = React.createClass({
  getInitialState: function(){
    return {
      movies: {}
    }
  },

  render: function(){
    return(
      <div>
        <header>
          <h1>Welcome to Movie House</h1>
        </header>

        <aside>
          <Showtimes />
        </aside>

        <aside>
          <MovieDetails />
        </aside>

        <div className="search">
          <Search />
        </div>

        <div className="results">
          <Results />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#container'))
module.export = App;
