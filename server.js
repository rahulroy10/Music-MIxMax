var express = require('express');
var bodyParser = require('body-parser');
var sync = require('synchronize');
var cors = require('cors');

var app = express();

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};


app.get('/resolver', cors(corsOptions), require('./api/resolver'));
app.get('/typeahead', cors(corsOptions), require('./api/typeahead'));

app.listen(3000, function(){

});
