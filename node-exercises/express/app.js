var express = require('express');
var app = express();

app.get('/helloworld.txt', function(req, res){
  res.send('Hello World');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});