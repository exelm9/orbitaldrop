// /**

// 	The user-node, outlines the basic structure
// 	for all clien nodes that are active on the 
// 	network.

// */
// angular.module('AirDrop').directive('userNode', function() {

// 	return {
// 		restrict: 'E',
// 		controller: function(){},
// 		link: function( scope, element, attributes ){
// 			console.log('element :', element)
// 			$(element).dropzone({ url: "/file/post" });
// 		},
// 		templateUrl: '/air-drop/app/templates/user-node.tpl.html',
// 	}

// });



/**

	The user-node, outlines the basic structure
	for all clien nodes that are active on the 
	network.

*/
angular.module('AirDrop').directive('userNode', function() {


	return {
		restrict: 'E',
		controller: function(){},
		link: function(scope, element, attrs) {

	        var config = {
	            url: '/upload',
	            maxFilesize: 100,
	            paramName: "uploadfile",
	            maxThumbnailFilesize: 10,
	            parallelUploads: 1,
	            autoProcessQueue: false
	        };

	        var eventHandlers = {

	        	"drop": function(){
	        		console.log('drop');
	        	},
	        	"dragstart": function(){
	        		console.log('dragstart');
	        	},
	        	"dragend": function(){
	        		console.log('dragend');
	        	},
	        	"dragenter": function(){
	        		console.log('dragenter');
	        	},
	        	"dragover": function(){
	        		console.log('dragover');
	        	},
	        	"dragleave": function(){
	        		console.log('dragleave');
	        	},
	        	"addedfile": function(){
	        		console.log('addedfile');
	        	},
	        	"addedfiles": function(){
	        		console.log('addedfiles');
	        	},
	        	"removedfile": function(){
	        		console.log('removedfile');
	        	},
	        	"thumbnail": function(){
	        		console.log('thumbnail');
	        	},
	        	"error": function(){
	        		console.log('error');
	        	},
	        	"errormultiple": function(){
	        		console.log('errormultiple');
	        	},
	        	"processing": function(){
	        		console.log('processing');
	        	},
	        	"processingmultiple": function(){
	        		console.log('processingmultiple');
	        	},
	        	"uploadprogress": function(){
	        		console.log('uploadprogress');
	        	},
	        	"totaluploadprogress": function(){
	        		console.log('totaluploadprogress');
	        	},
	        	"sending": function(){
	        		console.log('sending');
	        	},
	        	"sendingmultiple": function(){
	        		console.log('sendingmultiple');
	        	},
	        	"success": function(){
	        		console.log('success');
	        	},
	        	"successmultiple": function(){
	        		console.log('successmultiple');
	        	},
	        	"canceled": function(){
	        		console.log('canceled');
	        	},
	        	"canceledmultiple": function(){
	        		console.log('canceledmultiple');
	        	},
	        	"complete": function(){
	        		console.log('complete');
	        	},
	        	"completemultiple": function(){
	        		console.log('completemultiple');
	        	},
	        	"reset": function(){
	        		console.log('reset');
	        	},
	        	"maxfilesexceeded": function(){
	        		console.log('maxfilesexceeded');
	        	},
	        	"maxfilesreached": function(){
	        		console.log('maxfilesreached');
	        	},
	        	"queuecomplete": function(){
	        		console.log('queuecomplete');
	        	},

	            'success': function (file, response) {
	            	console.log('file uploaded')
	            }
	        };

	        console.log(element.context)
	        dropzone = new Dropzone(element.context, config);

	        angular.forEach(eventHandlers, function(handler, event) {
	            dropzone.on(event, handler);
	        });

	        scope.processDropzone = function() {
	        	console.log('file processDropzone')
	            dropzone.processQueue();
	        };

	        scope.resetDropzone = function() {
	        	console.log('file resetDropzone')
	            dropzone.removeAllFiles();
	        }
	    },
		templateUrl: '/air-drop/app/templates/user-node.tpl.html',
	}

});
