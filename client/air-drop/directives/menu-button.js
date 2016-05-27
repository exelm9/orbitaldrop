/**
	<menuButton float="right" icon="fa-sliders"/>

	The Console has a footer menu, each entry in this 
	menu is comprised of a simple <i></i> tag, and a
	font icon.

	## The Markup

	<i class="fa fa-comments-o" aria-hidden="true"></i>


*/
angular.module('AirDrop').directive('menuButton', function() {

	return {
		restrict: 'E',
		controller: function(){},
		link: function( scope, element, attributes ){}
	}

});