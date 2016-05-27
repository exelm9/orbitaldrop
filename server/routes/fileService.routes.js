const fileServiceController = require('../controllers/fileServiceController.js')

module.exports = function(app, express, socketedServer){
	var helpers = fileServiceController(express, socketedServer);
	app.get('/files/download', helpers.download);
	app.post('/files/upload', helpers.upload);
	app.delete('/files/', helpers.delete);

	// testing purposes
	//app.get('/connect', helpers.test);

	

}