var chatroom = require('../models/chatroomModel.js');

module.exports = function(io){
	io.on('connection', function(socket){
		socket.emit('refreshChat', chatroom)
		socket.on('sendChatMessage', function(message){
			if(chatroom.length > 30){
				chatroom.shift()
				chatroom.push(message)
			} else {
				chatroom.push(message)
			}
			io.sockets.emit('refreshChat', chatroom)
		})
	})
}