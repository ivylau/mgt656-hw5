var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/alert-dolphin', function(request, response){
    response.send('Hello MGT-656! How are you?');
});

app.listen(process.env.PORT || 4000);