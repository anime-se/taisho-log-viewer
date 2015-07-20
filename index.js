'use strict';

var express = require('express');

var app = express();

app.get('/', express.static(`${__dirname}/public`));

app.listen(3000, function() {
    console.log('Server running!');
});