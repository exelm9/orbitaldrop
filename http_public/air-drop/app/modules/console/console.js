// instantiate socket.io
var socket = io();
angular.module('AirDrop.console', [])

.controller('ConsoleController', function ($scope) {

  /*
  All logic resides in controller because it's angular best practice
  Definition of controller from google:
    con·trol·ler
    kənˈtrōlər/Submit
    a person or thing that directs or regulates something.
  */

  $.get('/api/user_profiles',function(response){
      var userId = response.userId;
      var username = response.username;
      socket.emit('createUser', userId, username);
  })

  socket.on('updateUsers',function(users){
    // change users object format into frontend object format
    var ping = document.getElementById("ping");
    ping.play();

    var angularUsers = {};
    for(var key in users){
      var user = users[key];
      // only one file for now, integrate with rex
      var file = user.files;
      angularUsers[key] = {
        id: key,
        username: user.username,
        packages: [{thumb:'apple.jpg'}]
      }
    }
    $scope.users = angularUsers;
    // angular stupid rerender when new data hack
    $scope.$apply();

  })

  $scope.users = {
  					// "o21ij34o1ij": {
       //        id: 'o21ij34o1ij',
       //        username: 'Rex Kelly', 
  					// 	packages:[ 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}
  					// 	]
  					// },
  					// "o212w0k201ij": {	
       //        id: 'o212w0k201ij',
       //        username: 'Rex Kelly', 
  					// 	packages:[ 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}
  					// 	]
  					// },
  					// "o23wqei3o1ij": {	
       //        id: 'o23wqei3o1ij',
       //        username: 'Rex Kelly', 
  					// 	packages:[ 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}, 
  					// 				{thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'},
       //              {thumb:'apple.jpg'},
       //              {thumb:'apple.jpg'}, 
       //              {thumb:'apple.jpg'}
  					// 	]
  					// }
  				}

    $scope.addConnection = function( connection ){
      $scope.users[connection.id] = connection;
    }

    $scope.closeConnection = function( event ){
      // var $el = $('#' + connection.id);
      //     $el.addClass('closed');
      //     setTimeout(function(){
      //       delete $scope.users[connection.id];
      //       $el.remove();
      //     },100);
    }
});
