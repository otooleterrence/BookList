'use strict';

//require in all modules
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

//my requires-in
const routes = require('./routes/index');
// const models = require('./models');

//setup modules for use
const app = express();

//HTML INDEX AND RENDER SETUP,
//probably with nunjuck, but maybe I'll try getting into react

//setup middlwear
app.use(volleyball);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup routing, personal middlwear
app.use('/', routes);


//retup route error catch


//call listener on some port

app.listen(8000, function () {
  console.log('listening on port 8000');
});
