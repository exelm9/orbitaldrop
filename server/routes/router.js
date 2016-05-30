const      path = require('path')
module.exports = function(app, express, io){
    
  // Static routes
  app.use(express.static(__dirname + '/../../http_public/'))
  // Module routes
  require('./authentication.routes.js')(app, express)
  require('./fileService.routes.js')(app, express, io)
  require('./client.routes.js')(app, express)
  require('./chat.routes.js')(io)
    
}


