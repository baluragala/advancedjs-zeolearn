/**
 * Created by moksha on 11/01/17.
 */


var chai = require('chai');

var assert = chai.assert;

describe('Array', function() {
    it('should start empty', function() {
        var arr = [];

        assert.equal(arr.length, 0);
    });
});