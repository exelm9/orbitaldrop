var clientController = require('../controllers/clientController.js')
var userController = require('../controllers/userController.js')

module.exports = function(app){

	app.get('/api/user_profiles', clientController.sendJSON)
	app.get('/profile', clientController.ensureLogin);
	app.get('/logout', clientController.logout);


}