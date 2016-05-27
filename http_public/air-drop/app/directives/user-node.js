/**

	The user-node, outlines the basic structure
	for all clien nodes that are active on the 
	network.

*/
angular.module('AirDrop').directive('userNode', function() {

	return {
		restrict: 'E',
		controller: function(){},
		link: function( scope, element, attributes ){
			console.log('element :', element)
			$(element).dropzone({ url: "/file/post" });
		},
		templateUrl: '/air-drop/app/templates/user-node.tpl.html',
	}

});