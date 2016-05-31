
module.exports = {
	createUser: function(socketId, userId, username, userData){
		var user = {};
		user.socketId = socketId;
		user.userId = userId;
		user.username = username;
		user.userData = userData;
		user.files = [];
		return user;
	},
	createFile: function(fileId, filename){
		var file = {};
		file.fileId = fileId;
		file.filename = filename;
		return file;
	},
	findUserBySocketId: function(socketId, users){
		for(var key in users){
			var user = users[key];

			if(user.socketId === socketId){
				return user;
			}
		}
		
		return false;
	}
};

