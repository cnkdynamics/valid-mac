'use strict';

// check if the given MAC address has a valid form.
exports.isValid = function (mac) {

	// check first if undefined
	if (!mac) {
		return false;
	}

	// check if mac is a valid string
	if (typeof mac !== 'string') {
		mac = mac.toString();
	}

	// simply match the mac from regular expression
	if (mac.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)) {
		return true;
	} else {
		return false;
	}
};
