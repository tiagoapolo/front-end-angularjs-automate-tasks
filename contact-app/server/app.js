var express = require('express');
var bodyParser= require('body-parser');
var db = require('./db');
var app = express();


// var apiRoutes = require('./routes/apiRoutes');


// POST PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// SET SERVER PORT
app.set('port', process.env.PORT || 3000);

app.get('/contacts', function(req, res) {
    res.json(db.contacts);
});

// RUN SERVER
var server = app.listen(app.get('port'), function () {
    console.log('Server running at port: ' + server.address().port);
});
