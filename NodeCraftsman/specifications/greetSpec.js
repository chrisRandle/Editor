'use strict';

var greet = require('../source/greet');

describe('greet', function() {

    //Test for specific case Chris as first and only parameter
    it('should greet the given name', function() {
        expect(greet('Chris')).toEqual('Hello Chris!');
    })

    //Allow for general case
    it('should greet no-one special if no name is given', function() {
        expect(greet()).toEqual('Hello World!');
    })

});

