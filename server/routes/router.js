var path = require('path')
module.exports = function(app, express, socketedServer){
    
    // Static routes
    app.use(express.static(__dirname + '/../../http_public/'))

    


    
    // Module routes
    require('./authentication.routes.js')(app, express)
    require('./client.routes.js')(app, express)
    require('./fileService.routes.js')(app, express, socketedServer)
}


