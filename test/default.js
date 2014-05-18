
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var Response = require('../')

	

	describe('A Response', function(){
		it('should check its constructor input #1', function(){
			assert.throws(function(){
				new Response();
			});
		});	

		it('should check its constructor input #2', function(){
			assert.throws(function(){
				new Response({
					transport: null
				});
			});
		});	

		it('should check its constructor input #3', function(){
			assert.throws(function(){
				new Response({
					status: null
				});
			});
		});	

		it('should check its constructor input #4', function(){
			assert.throws(function(){
				new Response({
					status: Response.status.Found
				});
			});
		});	

		it('should accept valid constructor input #1', function(){
			assert.doesNotThrow(function(){
				new Response({
					  status 	: Response.statuses.Found
					, transport : Response.transports.Local
				});
			});
		});	

		it('should accept valid constructor input #2', function(){
			assert.doesNotThrow(function(){
				new Response({
					  status: Response.statuses.NotFound
				});
			});
		});

		it('should return if the result was positive (something was found) #1', function(){
			var res = new Response({
				status: Response.statuses.NotFound
			});

			assert.equal(res.isPositive(), false);
		});	

		it('should return if the result was positive (something was found) #2', function(){
			var res = new Response({
				  status 	: Response.statuses.Found
				, transport : Response.transports.Local
			});

			assert.equal(res.isPositive(), true);
		});	


		it('should be able to list all available transports #1', function(){
			assert.equal(JSON.stringify(new Response({
				status: Response.statuses.NotFound
			}).transports), '{"Local":"local","REST":"rest","RabbitMQ":"rabbit"}');
		});


		it('should be able to list all available transports #2', function(){
			assert.equal(JSON.stringify(Response.transports), '{"Local":"local","REST":"rest","RabbitMQ":"rabbit"}');
		});




		it('should be able to list all available statuses #1', function(){
			assert.equal(JSON.stringify(new Response({
				status: Response.statuses.NotFound
			}).statuses), '{"NotFound":1,"Found":1000}');
		});


		it('should be able to list all available statuses #2', function(){
			assert.equal(JSON.stringify(Response.statuses), '{"NotFound":1,"Found":1000}');
		});
	});
	