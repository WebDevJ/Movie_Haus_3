'use strict'

require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const request    = require('request');

const app        = express();

// const config = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS
//   }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/')));

app.set('views', './views')
app.set('view engine', 'ejs')


app.route('/')
.get((req, res) => {
  res.render('index.ejs');
});

app.use('/movies', require(path.join(__dirname, '/routes/movies')));


const port = process.env.PORT || 3000;
const server = app.listen(port, function( ){
     console.log('http://127.0.0.1:'+port+'/');
});
//
// const port = process.env.PORT || 3000;
// const server = app.listen(port);
//
//
