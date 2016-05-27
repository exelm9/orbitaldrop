/**

	The user-node, outlines the basic structure
	for all clien nodes that are active on the 
	network.

*/
angular.module('AirDrop').directive('connectedUsers', function() {

	return {
		restrict: 'E',
		replace: true,
		controller: function(){
			this.addConnection = function( connectedUser ){
				$scope.connections.push(connectedUser);

			}
		},
		link: function( scope, element, attributes ){},
		templateUrl: '/air-drop/app/templates/connected-users.tpl.html'
	}

});