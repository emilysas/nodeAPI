var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.get('/', function(request, response){
	response.render('index');
});

app.get('/users/:username', function(request, response){
	response.render(request.params.username);
});

server.listen(3000, function(){
	console.log("Server listening on port 3000");
});

module.exports = server;