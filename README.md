# ee-soa-discovery-response

Response implementation for SOA Discovery implementations

## installation

	npm ee-soa-discovery-response

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-discovery-response.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-discovery-response)

## usage

A Discover implementation should alwas respond with an instance of this class

### Constructor

	var DiscoveryResponse = require('ee-soa-discovery-response');

	var myresponse = new DiscoveryResponse({
		  status 	: DiscoveryResponse.statuses.Found
		, transport : DiscoveryResponse.transports.Local
	});


Currently supported transports:

- Local: request does not leave the current process
- REST: sends requests via rest transport
- RabbitMQ: sends resuqests via a rabbitMQ queue



### transports property

object containing all available transports

	var transports = DiscoveryResponse.transports;

	// alternative method
	var myresponse = new DiscoveryResponse({
		  status 	: DiscoveryResponse.statuses.Found
		, transport : DiscoveryResponse.transports.Local
	});

	var transports = myresponse.transports;



### status property

object containing all available statuses

	var statuses = DiscoveryResponse.statuses;

	// alternative method
	var myresponse = new DiscoveryResponse({
		  status 	: DiscoveryResponse.statuses.Found
		, transport : DiscoveryResponse.transports.Local
	});

	var statuses = myresponse.statuses;