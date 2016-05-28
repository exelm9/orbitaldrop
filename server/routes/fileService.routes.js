const fileServiceController = require('../controllers/fileServiceController.js')
const bodyParser = require('body-parser');
module.exports = function(app, express, socketedServer){
	
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true }));

	var helpers = fileServiceController(express, socketedServer);
	app.get('/files/download', helpers.download);
	app.post('/files/upload', helpers.upload);
	app.delete('/files/', helpers.delete);

	// testing purposes
	//app.get('/connect', helpers.test);

	

}