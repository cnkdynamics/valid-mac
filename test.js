'use strict';
var expect = require('expect.js');
var mac = require('./index');


/* global describe, it */
describe('valid-mac', function () {

	it ('Check isValid function', function (done) {

		expect(mac.isValid('foo-mac-address')).to.be(false);
		expect(mac.isValid('14:10:9f:d3:67:d9')).to.be(true);

		done();
	});
});