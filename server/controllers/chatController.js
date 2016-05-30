var chatroom = require('../models/chatroomModel.js');

module.exports = function(io){
	io.on('connection', function(socket){
		socket.emit('refreshChat', chatroom)
		socket.on('sendChatMessage', function(message){
			chatroom.push(message)
			io.sockets.emit('refreshChat', chatroom)
			console.log(message)
		})
	})
}