const userList = require('../models/userModel.js')
const path = require('path');

const helper = {
  serveClient : function(req,res){
    res.sendFile(path.resolve('../http_public/air-drop/_index.html'))
  },

  logout : function(req, res) {
    req.logout();
    res.redirect('/login');
  },

  sendJSON: function(req,res) {
    res.json(req.user)
  },
  handleAll: function(req,res){
    if(req.isAuthenticated()){
      res.redirect('/air-drop/')
    }else{
      res.redirect('/login')
    }
  }
}

module.exports = helper