const clientController = require('../controllers/clientController.js')
const   userController = require('../controllers/userController.js')
const   ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const             path = require('path');

module.exports = function(app,express){

	app.get('/air-drop/' , ensureLoggedIn('/login'), clientController.serveClient )
	app.get('/api/user_profiles', clientController.sendJSON)
	app.get('/logout', clientController.logout);
	app.get('*', clientController.handleAll)

}
