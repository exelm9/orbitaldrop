const path = require('path');


module.exports = function(passport) {
	return({
		checkAuth : function(req, res, next) {
  		if(req.isAuthenticated()){
  			res.redirect('/air-drop')
  		} else {
				next()
  		}
		},

		serveLogin : function(req,res){
			res.sendFile(path.resolve('../http_public/login/_index.html'))
		},
	
		githubRedirect : passport.authenticate('github'),
   
		githubReturn : passport.authenticate('github', {
      successRedirect : '/air-drop',
      failureRedirect : '/login'
    }),
	})
}