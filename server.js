let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');

const app = express();
var port = process.env.port || 4000;
var server = app.listen(function(){
    console.log('App working on port '+port);
});
