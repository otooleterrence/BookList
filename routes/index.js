'use strict';

// const routes = {};
const routes = require('express').Router();

routes.get('/authors', function (req, res) {
  res.send('this is a list of authors');
});

routes.get('/books', function (req, res) {
  res.send('this is a list of books');
});

routes.get('/', function (req, res) {
  res.send('Welcome to the book site.');
});

module.exports = routes;
