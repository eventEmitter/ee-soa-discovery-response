!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, type 			= require('ee-types');


	var Transports = {
		localTransport: 'local'
	};


	var DiscoveryResponse = module.exports = new Class({

		init: function(options) {
			if (!options) throw new Error('Expecting an options object when creating a SOA Discovery Response!');
			if (!options.transport || !type.string(options.transport)) throw new Error('You have to define a transport method when creating a SOA Discovery Response!');
			
			// users should not change this
			Class.define(this, 'transport', Class(options.transport).Enumerable());
		}


		, listTransports: function() {
			return Transports;
		}
	});


	DiscoveryResponse.listTransports = function(){
		return Transports;
	};


	Object.keys(Transports).forEach(function(key){
		DiscoveryResponse[key] = Transports[key];
	});
}();
