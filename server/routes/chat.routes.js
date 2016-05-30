const chatController = require('../controllers/chatController.js')

module.exports = function(io){
	chatController(io);
}