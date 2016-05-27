var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/airdrop';
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUtilMethods = require ('../utils/dbUtilMethods');
var uniqueValidator = require('mongoose-unique-validator');

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);

db.on('error', console.error.bind(console, 'DB connection error:'));

db.once('open', function(){
  console.log("Database successfully connected");
});

//setup user schema
  var Users = new Schema({
    token : String,
    username : String,
    userId : { type : Number, required : true, unique : true},
    notifications: [],
    blackList : [],
    whiteList : [],
    directMessages : [],
    nodeList : [],
    chatMessages : [],
    status : Boolean
  });

Users.plugin(uniqueValidator);

  var UsersModel = mongoose.model('Users', Users);

  module.exports = UsersModel;
