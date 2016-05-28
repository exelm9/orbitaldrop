const     path = require('path');

module.exports = function(passport) {
	
	return({
		
		serveLogin : function(req,res){
		    /**
		        Bug:

		          when using path.resolve() like in our example bellow, the file paths 
		          do not seem to resolve correctly on all systems, user path.join() instead.
		          
		        example:  

					res.sendFile(path.resolve('../http_public/login/_index.html'))

			*/
			res.sendFile(path.join(__dirname, '/../../http_public/login/_index.html'))
		},
		
		handleAll: function(req,res){
    		if(req.isAuthenticated()){
      		res.redirect('/air-drop/')
    		} else {
      		res.redirect('/login')
    	}
  	},
	
		githubRedirect : passport.authenticate('github'),
   
		githubReturn : passport.authenticate('github', {
      		successRedirect : '/air-drop',
      		failureRedirect : '/login'
    	})
	})
}