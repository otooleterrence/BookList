'use strict';

//include sequlize
const Sequelize = require('sequelize');
const db = new Sequelize('posgress://localhost/bookList');

//setup tables
db.define('books', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rate: {
    type: Sequelize.INTEGER
  }
});

//export modules
//seed and sync in app.js
