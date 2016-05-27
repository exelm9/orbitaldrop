const userList = require('../models/userModel.js')

const helper = {
  ensureLogin : function(req,res){
    if(req.isAuthenticated()){
      res.end()
    } else {
      res.redirect('/login')
    }
  },
  logout : function(req, res) {
    req.session.destroy();
    res.redirect('/login');
  },
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()){
      return next();
    } else {
      res.redirect('/login');
    }
  },
  sendJSON: function(req,res) {
    res.json(req.user)
  },
  catchAll: function(req,res){
    if(req.isAuthenticated()){
      res.reditect('/air-drop')
    } else {
      res.redirect('/login')
    }
  }
}

module.exports = helper