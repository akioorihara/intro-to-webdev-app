var express = require('express');
var app = express();

app.get('/cheer.txt', function(request, response){
    res.end('You have quote lovey eyes.');
});

app.get('/jeer.txt', function(request, response){
    res.end('hello world');
});

var server = app.listen(8080, fucuntion(){
    console.log('listening on the port 8080');
});