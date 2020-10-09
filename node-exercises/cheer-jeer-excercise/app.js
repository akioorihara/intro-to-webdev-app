var express = require('express');
var app = express();

app.get('/cheer.txt', function(request, response){
    response.end('You have quote lovey eyes.');
});

app.get('/jeer.txt', function(request, response){
    response.end('You have issues');
});

var server = app.listen(8080, function(){
    console.log('listening on the port 8080');
});