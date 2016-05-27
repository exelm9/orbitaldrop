/**

	The Console has a footer menu, each entry in this 
	menu is comprised of a simple <i></i> tag, and a
	font icon.

*/
angular.module('AirDrop').directive('menuButton', function() {
	return {
		restrict: 'E',
		replace: true,
		template: function(elem, attr){
			return '<i class="fa '+ attr.icon  + ' ' + attr.float +'" aria-hidden="true"></i>';
		}
	}

});