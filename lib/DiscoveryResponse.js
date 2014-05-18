!function(){

    var   Class         = require('ee-class')
        , log           = require('ee-log')
        , type          = require('ee-types');


    var transports = {
          Local     : 'local'
        , REST      : 'rest'
        , RabbitMQ  : 'rabbit'
    };


    var statuses = {
          NotFound  : 1
        , Found     : 1000
    };



    var DiscoveryResponse = module.exports = new Class({

          status    : null
        , transport : null

        , transports: transports
        , statuses  : statuses


        , init: function(options) {
            if (!options) throw new Error('Expecting an options object when creating a SOA Discovery Response!');
            if (!options.status || !type.number(options.status)) throw new Error('You have to define a status when creating a SOA Discovery Response!');
            
            Class.define(this, 'status', Class(options.status).Enumerable());

            if (this.status >= 1000) {
                // ok
                if (!options.transport || !type.string(options.transport)) throw new Error('You have to define a transport method when creating a SOA Discovery Response!');
                
                // transport method
                Class.define(this, 'transport', Class(options.transport).Enumerable());
            }           
        }


        , isPositive: function() {
            return this.status >= 1000;
        }
    });


    DiscoveryResponse.transports = transports;
    DiscoveryResponse.statuses = statuses;
}();
