# ee-soa-discovery-response

Response implementation for SOA Discovery implementations

## installation

	npm ee-soa-discovery-response

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-discovery-response.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-discovery-response)

## usage

A Discover implementation should alwas respond with an instance of this class

### Cosntructor

	var DiscoveryResponse = require('ee-soa-discovery-response');

	var myresponse = new DiscoveryResponse({
		transport: DiscoveryResponse.localTransport
	});


Currently supported transports:

- localTransport: request does not leave the current process


### listTransports method

returns an object containing all vailabel transport ids

	var transports = DiscoveryResponse.listTransports();

	// alternative method
	var myresponse = new DiscoveryResponse({
		transport: DiscoveryResponse.localTransport
	});

	var transports = myresponse.listTransports();
	