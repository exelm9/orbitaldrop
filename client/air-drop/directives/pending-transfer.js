/**

	All pending transfers will orbit their target nodes
	untill the transfer is complete. at which point they
	will vanish.

	## The Markup

	<div class="package">
		<b onclick="console.log('clicked');">
			<img src="/Users/rexrkelly/Desktop/js.jpg">
		</b>
	</div>

*/
angular.module('AirDrop').directive('pendingTransfer', function() {

	return {
		restrict: 'E',
		controller: function(){},
		link: function( scope, element, attributes ){}
	}

});