
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var Response = require('../')

	

	describe('A Response', function(){
		it('should check its contructor input', function(){
			assert.throws(function(){
				new Response();
			});
		});	

		it('should check its contructor input #2', function(){
			assert.throws(function(){
				new Response({
					transport: null
				});
			});
		});		

		it('should accept valid contructor input', function(){
			assert.doesNotThrow(function(){
				new Response({
					transport: Response.localTransport
				});
			});
		});	

		it('should be able to list all available transports', function(){
			assert.equal(JSON.stringify(new Response({
				transport: Response.localTransport
			}).listTransports()), '{"localTransport":"local"}');
		});


		it('should be able to list all available transports #2', function(){
			assert.equal(JSON.stringify(Response.listTransports()), '{"localTransport":"local"}');
		});
	});
	