'use strict';

var singleton = initialize();
// Create a way to initialize new service managers if you want to opt out of the singleton
singleton.intialize = initialize;

module.exports = singleton;

function initialize() {
    var services = {};

    services.register = register;
    return services;

    function register(name, service) {
        Object.defineProperty(services, name, {
            configurable: false,
            get: function() {
                return service;
            }
        });
    }
}


