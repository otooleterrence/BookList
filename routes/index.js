'use strict';

// const routes = {};
const routes = require('express').Router();
const db = require('../models');

routes.get('/authors', function (req, res) {
  db.Authors.findAll()
  .then( ( authors ) => {
    res.render('authors.html', {authors});
  });
});

routes.get('/books', function (req, res) {
  db.Books.findAll()
  .then( ( books ) => {
    res.render('books.html', {books});
  });
});

routes.get('/', function (req, res) {
  res.redirect('/books');
});

module.exports = routes;
