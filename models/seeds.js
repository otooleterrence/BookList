'use strict';

//include sequlize
// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost/bookList');
const db = require('./index.js');
const Promise = require('bluebird');

// const Books = db.Books;
// const Authors = db.Authors;

const anni = db.Authors.create({
    first_name: 'Jeff',
    last_name: 'VanderMeer',
    link: 'https://en.wikipedia.org/wiki/Jeff_VanderMeer'
  }).then( (author) => {
    console.log('created vandermeer with id ' + author.id);
    return db.Books.create({
      title: 'Annihilation',
      rating: 3.5,
      link: 'https://en.wikipedia.org/wiki/Annihilation_(VanderMeer_novel)',
      photo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Annihilation_by_jeff_vandermeer.jpg',
      status: 2,
      authorId: author.id
    });
  })
  .then( (book) => {
    console.log('created annihilation with id ' + book.id);
  })
  .catch((err) => {
    console.error('big time error', err);
  });

const ttss = db.Authors.create({
    first_name: 'John',
    last_name: 'le Carré',
    link: 'https://en.wikipedia.org/wiki/John_le_Carr%C3%A9'
  }).then( (author) => {
    console.log('created le Carré with id ' + author.id);
    return db.Books.create({
      title: 'Tinker, Tailor, Soldier, Spy',
      rating: 0,
      link: 'https://en.wikipedia.org/wiki/Tinker_Tailor_Soldier_Spy',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/514rnPJkPtL._SY344_BO1,204,203,200_.jpg',
      status: 0,
      authorId: author.id
    });
  })
  .then( (book) => {
    console.log('created tinker, Tailor with id ' + book.id);
  })
  .catch((err) => {
    console.error('big time error', err);
  });

Promise.all([anni, ttss])
.then( () => {
  console.log(' <== finished logging new items ==> ');
});
