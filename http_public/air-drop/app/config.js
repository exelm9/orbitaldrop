;(function() {

	/**
	* A place to store shared consts and vars
	* for use throughout our AirDrop
	*
	* Inject CONSTANTS service as a dependency and then use like this:
	* CONSTANTS.API_ROOT
	*/
	angular
		.module('AirDrop.configs')
		.constant('CONSTANTS', {
			'API_ROOT': '/api',
			'PING_HOST': '192.81.135.170'
		});

})();
