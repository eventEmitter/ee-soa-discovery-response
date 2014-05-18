!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, type 			= require('ee-types');



	var DiscoveryResponse = module.exports = new Class({

		init: function(options) {
			if (!options) throw new Error('Expecting an options object when creating a SOA Discovery Response!');
			if (!options.transport || !type.number(options.transport)) throw new Error('You have to define a transport method when creating a SOA Discovery Response!');
			
			// users should not change this
			Class.define(this, 'transport', Class(options.transport).Enumerable());
		}




	});


	DiscoveryResponse.localTransport = 13;
}();
