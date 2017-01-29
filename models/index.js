'use strict';

//include sequlize
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/bookList', {logging: false});

//setup tables
const Books = db.define('books', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      max: 4,
      min: 0,
    }
  },
  link: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.INTEGER,
    validate: {
      max: 2,
      min: 0,
    }
  }
});

const Authors = db.define('authors', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  getterMethods: {
    name: () => {
      return this.first_name + ' ' + this.last_name;
    },
    name_lf: () => {
      return this.last_name + ', ' + this.first_name;
    }
  }
});

Books.belongsTo(Authors);

// db.Books = Books;
// db.Authors = Authors;
// console.log(db);

//export modules
//seed and sync in app.js
module.exports = {
  Books: Books,
  Authors: Authors
};
