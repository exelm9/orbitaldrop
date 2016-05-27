const        express = require("express");
const 			http = require('http');

var app = require('express')();
var socketedServer = require('http').Server(app);

require('./routes/router.js')(app, express, socketedServer);

socketedServer.listen(process.env.PORT || 3000);

module.exports = socketedServer




