var clientController = require('../controllers/clientController.js')
var userController = require('../controllers/userController.js')
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const path = require('path');

module.exports = function(app,express){


	app.get('/air-drop/' , ensureLoggedIn(),clientController.serveClient )
	app.get('/api/user_profiles', clientController.sendJSON)
	app.get('/logout', clientController.logout);
	//app.get('*', clientController.handleAll)


}