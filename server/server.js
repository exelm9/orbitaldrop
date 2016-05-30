const        express = require("express");
const 	        http = require('http');
const       socketIO = require('socket.io');
const            app = require('express')();
const socketedServer = require('http').Server(app);
const             io = socketIO(socketedServer);

require('./routes/router.js')(app, express, io);

socketedServer.listen(process.env.PORT || 80);

module.exports = socketedServer




