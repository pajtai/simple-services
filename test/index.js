'use strict';

var services = require('../index'),
    chai = require('chai');

chai.should();

describe('simple-services', function() {

    describe('new instance', function() {
        it('can register service', function() {
            var newServices = services.intialize();
            newServices.register('boom', function() { return 42; });
            newServices.boom().should.equal(42);
        });
        it('cannot reregister service', function() {
            var newServices = services.intialize();
            newServices.register('bam', function() { return 24; });
            (function() {
                newServices.register('bam', function() { return 0; });
            }).should.throw(Error);
        });
        it('cannot replace service', function() {
            var newServices = services.intialize();
            newServices.register('bam', function() { return 24; });
            (function() {
                newServices.bam = function() { return 0; };
            }).should.throw(Error);
        });
    });
    describe('singleton', function() {
        it('can register service', function() {
            services.register('boom', function() { return 42; });
            services.boom().should.equal(42);
        });
    });
});