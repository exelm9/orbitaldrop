const fileServiceController = require('../controllers/fileServiceController.js')

module.exports = function(app, express, io){
	var helpers = fileServiceController(express, io);
	app.get('/files/download', helpers.download);
	app.post('/files/upload', helpers.upload);
	app.delete('/files/', helpers.delete);

	// testing purposes
	//app.get('/connect', helpers.test);

}