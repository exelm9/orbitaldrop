const fs = require('fs');
const Busboy = require('busboy');
const uuid = require('uuid');
const path = require('path');
const util = require('../utils/fileServiceUtil.js');
const mime = require('mime-types');
const multiparty = require('multiparty');

var users = require('../models/activeUserModel.js');

module.exports = function(express, io){
	// adds event listeners to the http.Server instance
	
	var userSockets = {}
	/*** 
		The users object will hold the state of our application.  When a new user emits/ends a 
		socket event, we will add/remove the user instance and emit the users list to all clients.
	***/
	io.on('connection', function(socket){
		socket.on('createUser', function(sessionId, username, userData){
			users[sessionId] = util.createUser(socket.id, sessionId, username, userData);
			userSockets[sessionId] = socket;
			io.sockets.emit('updateUsers', users);
		})

		socket.on('transferChoice', function(response){
			var decision = response.choice;
			var senderUserId = response.senderUserId;
			userSockets[senderUserId].emit('transferDecision', decision);
		})

		socket.on('disconnect', function () {
			var user = util.findUserBySocketId(socket.id, users);
			// remove both socket and user on socket closing
			delete userSockets[user.userId];
		 	delete users[user.userId];
			io.sockets.emit('updateUsers', users);
		 	/*** BUILD DELETION OF FILES IN UPLOADS FOLDER IF USER DISCONNECTS ***/
		});
	})

	return({
		/*** 
			Dependencies:
				request.body.recieverUserId
		***/
		upload : function(request, response, error){
			// add middleware validation
			var userId;
			if(request.session.passport){
				userId = request.session.passport.user.id
			}else{
				res.status(500).send({error:'User has no session!'});
			}
			
			/*** 
				bus boy is responsible for parsing multipart form data since express 4.0 droped multipart handling
				https://www.npmjs.com/package/busboy
			***/
			var busboy = new Busboy({ headers: request.headers });
			
			// add listener when bus boy handles a file
			busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
				//console.log(file, req, 'here')
				// create a unique id and prepend to filename so there isn't namesake clashing
				var uniqueId = uuid.v4();
				// asychronously write a file using a stream to uploads folder
				fstream = fs.createWriteStream(__dirname + '/../uploads/' + uniqueId + filename);
				file.pipe(fstream);
				// added another multi form parser because busboy doensn't grab all the fields in the form at once

				var recieverUserId = request.query.id;
				var filename = filename;

				// add uniqueId and filename to user receiving download
				users[recieverUserId].files[0] = util.createFile(uniqueId, filename);
				
				// emit a download prompt to the user that is receiving the upload
				userSockets[recieverUserId].emit('requestTransfer', {filename:filename, senderUserId: userId});
			});

			// close request
			busboy.on('finish', function() {
				response.writeHead(303, { Connection: 'close', Location: '/' });
				response.end();
			});

			request.pipe(busboy);
		},
		download : function(request, response, error) {
			// add middleware validation
			var userId;
			if(request.session.passport){
				userId = request.session.passport.user.id
			}else{
				response.status(500).send({error:'User has no session!'});
			}

			/*** build redirect to application homepage if have no files ***/

			var file;
			console.log(userId, users,'lol')
			if(users[userId].files.length){
				file = users[userId].files[0]
			}

			var filepath = __dirname + '/../uploads/' + file.fileId + file.filename;
			var filename = path.basename(filepath);
			var mimetype = mime.lookup(filepath);

			// set headers so user will download file
			response.setHeader('Content-disposition', 'attachment; filename=' + filename);
			response.setHeader('Content-type', mimetype);

			// asychronously chunk file to response object which is responsible for holding the file that the user will consume
			var filestream = fs.createReadStream(filepath);
			filestream.pipe(response);

			// delete file after user has downloaded
			response.on('finish',function(){
			  fs.unlink(filepath, function(error){
			  	if(error)
			  		console.log(error);
			  });
			});
		},
		delete: function(request, response, error) {
			// add middleware validation
			var userId;
			if(request.session.passport){
				userId = request.session.passport.user.id
			}else{
				res.status(500).send({error:'User has no session!'});
			}

			var file;
			console.log(users[userId], 'what')
			if(users[userId].files.length){
				file = users[userId].files[0]
			}

			var filepath = __dirname + '/../uploads/' + file.fileId + file.filename;
			var filename = path.basename(filepath);

			/*** Build check if file exists ***/
			fs.unlink(filepath, function(error){
				if(error)
					console.log(error);
				response.send ({
					status: "200",
					response: {
						filename: filename,
						success: true
					}
				});   
			});
		},
		test: function(request, response, error) {
			// add middleware validation
			if(request.session.passport){
				var userId = request.session.passport.user.id;
				response.sendFile(path.resolve('controllers/test/test.html'));
			}else{
				response.send('login puhleaze');
			}
			
			
		}

	})
	
}
