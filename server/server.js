const        express = require("express");
const 	        http = require('http');

const            app = require('express')();
const socketedServer = require('http').Server(app);

require('./routes/router.js')(app, express, socketedServer);

socketedServer.listen(process.env.PORT || 80);

module.exports = socketedServer




