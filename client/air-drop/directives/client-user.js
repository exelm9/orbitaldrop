/**
	<client-user> </client-user>
	
	Like all other nodes, the user has their own
	node, this one is featured at the bottom of the console.

	## The Markup

	<div class="user-node client">
		<div class="node-container animated fadeIn">
			<div id="Node_66" class="node node-circle animated slow infinite pulse hover-pause drop-zone sonar sonar-stroke sonar-infinite" style="border:2px solid rgba(39, 92, 241, 0.51)">
				<i> You </i>
				<div class="pending"></div>
			</div>
		</div>
	</div>


*/
angular.module('AirDrop').directive('clientUser', function() {

	return {
		restrict: 'E',
		controller: function(){},
		link: function( scope, element, attributes ){}
	}

});
