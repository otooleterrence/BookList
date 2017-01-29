'use strict';

//require in all modules
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

//my requires-in
const routes = require('./routes/index');
const db = require('./models');

//setup modules for use
const app = express();
const Books = db.Books;
const Authors = db.Authors;

//HTML INDEX AND RENDER SETUP,
//probably with nunjuck, but maybe I'll try getting into react
nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(express.static('./public'));


//setup middlwear
app.use(volleyball);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup routing, personal middlwear
app.use('/', routes);


//retup route error catch
app.use( function (err, req, res, next) {
  console.error(err);
  res.status(500).send();
});


//call listener on some port after db connection intiallized
const PORT = 8000;

Books.sync( { force: false } )
.then( () => {
  Authors.sync( { force: false })
  .then( () => {
    app.listen(PORT, function () {
      console.log('listening on port 8000');
    });
  });
});
