var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var jacob = require('./app/jacob')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
	response.render('index', request.query);
});

app.get('/json_name', function(req, res){
  res.json('json_name', {query: req.query});
});

app.get('/jacob', function(req, res){
	console.log(jacob());
	res.json('jacob', {query: jacob.query});
})

server.listen(3000, function(){
	console.log("Server listening on port 3000");
});

module.exports = server;