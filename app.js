module.exports = function(arr, cb, done) {
	if(arr.constructor === Array) {
		var arrlen = arr.length - 1;
		if(arr.length == 0) { done(); }
		arr.forEach(function(val, key, index) {
			cb(val, key);
			if(index === arrlen) {
				done();
			}
		});
	} else if(arr.constructor === Object) {
		var arrlen = Object.keys(arr).length - 1;
		if(arr.length == 0) { done(); }
		Object.keys(arr).forEach(function(key, index) {
			cb(arr[key], key);
			if(index === arrlen) {
				done();
			}
		});
	} else if(arr.constructor === String) {
		var arrlen = arr.split('').length;
		if(arr.length == 0) { done(); }
		arr.split('').forEach(function(val, key, index) {
			cb(val, key);
			if(index === arrlen) {
				done();
			}
		});
	} else {
		throw new TypeError("Unable to iterate " + arr.constructor);
	}
};
