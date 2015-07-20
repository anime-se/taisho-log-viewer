'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

var expressWs = require('express-ws')(app);

app.get('/', express.static(`${__dirname}/public`));
app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
        console.log(msg);
        ws.send(msg);
    })
});

app.listen(3000, function() {
    console.log('Server running!');
});