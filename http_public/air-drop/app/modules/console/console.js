angular.module('AirDrop.console', [])

.controller('ConsoleController', function ($scope) {

  $scope.addConnection = function( connection ){
    $scope.users[connection.id] = connection;
  }

  $scope.closeConnection = function( event ){
    console.log(event);
    // var $el = $('#' + connection.id);
    //     $el.addClass('closed');
    //     setTimeout(function(){
    //       delete $scope.users[connection.id];
    //       $el.remove();
    //     },100);
  }

  $scope.users = {
  					"o21ij34o1ij": {	username: 'Rex Kelly', 
  						packages:[ 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}
  						]
  					},
  					"o212w0k201ij": {	username: 'Rex Kelly', 
  						packages:[ 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}
  						]
  					},
  					"o23wqei3o1ij": {	username: 'Rex Kelly', 
  						packages:[ 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}, 
  									{thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'},
                    {thumb:'apple.jpg'},
                    {thumb:'apple.jpg'}, 
                    {thumb:'apple.jpg'}
  						]
  					}
  				}

});
