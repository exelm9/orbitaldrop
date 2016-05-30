// instantiate socket.io
var socket = io();
angular.module('AirDrop.console', [])

.controller('ConsoleController', function ($scope, state) {

  /*
  All logic resides in controller because it's angular best practice
  Definition of controller from google:
    con·trol·ler
    kənˈtrōlər/Submit
    a person or thing that directs or regulates something.
  */

  $scope.chatRoom = []
  $.get('/api/user_profiles',function(response){
      var userId = response.id;
      var username = response.login;
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

  socket.on('refreshChat', function(value){
    console.log(value)
    $scope.chatRoom = value
    $scope.$apply();
  })

  socket.on('requestTransfer',function(response){
      var senderUserId = response.senderUserId
      var filename = response.filename
      
      /*** user will choose accept or reject.  
      1. A decision will be emitted
      2. Accept will cause a forced get request. Reject will send a delete 
         request for file.
      ***/
      // temporarily true, let user decide
      if (confirm('We have a special package for you... Do you want it...')) {
        window.open('/files/download');
      } else {
        $.ajax({
            url: '/files',
            type: 'DELETE',
            success: function(result) {
                console.log(result, 'should be result of deletion')
            }
        });
      }
      
      
      // socket.emit('transferChoice',{
      //                 senderUserId:senderUserId,
      //                 choice:choice
      //             })

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

    $scope.sendMessage = function(message){


      var messageObj = {
        user: state.user.login,
        message : message
      } 

      console.log(state.user)

      // $scope.chatRoom.push(messageObj)
      socket.emit('sendChatMessage', messageObj)
    }

    $scope.toggleChatBox = function(){
      console.log("eh")
      var status = true
      var toggle = getElementsByClassName("panel-body panel-footer")
      if(status){
        status = false
      }
      if(!status){
        status = true
      }
      if(status){
        toggle.display = "block"
      }
      if(!status){
        toggle.display = "none"
      }
    }


})
.factory('state', function(){
  return {
    chat : [],
    user: {},

  }
})
