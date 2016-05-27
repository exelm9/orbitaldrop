/**

	The user-node, outlines the basic structure
	for all clien nodes that are active on the 
	network

	## The Markup

	<div class="user-node">
		<div class="node-container animated fadeIn">
			<div id="{{ node_id/user_id }}" class="node node-circle animated slow infinite pulse hover-pause drop-zone">
				<i> {{ user_handle/user_name }}</i>
				<div class="pending"></div>
			</div>
		</div>
	</div>

*/
angular.module('AirDrop').directive('userNode', function() {

	return {
		restrict: 'E',
		controller: function(){},
		link: function( scope, element, attributes ){}
	}

});