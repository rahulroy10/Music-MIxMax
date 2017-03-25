var express = require('express');
var bodyParser = require('body-parser');
var sync = require('synchronize');
var cors = require('cors');

var app = express();

app.get()

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};


app.get('/soundcloud/typeahead', cors(corsOptions), require('./api/scTypeahead'))
app.get('/soundcloud/resolver', cors(corsOptions), require('./api/scResolver'))
app.get('/spotify/resolver', cors(corsOptions), require('./api/spotifyResolver'))
app.get('/spotify/typeahead', cors(corsOptions), require('./api/spotifyTypeahead'))

app.listen(3000)
