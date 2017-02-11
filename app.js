module.exports = function(arr, cb, done) {
	var arrcur = 0;
	if(arr.constructor === Array) {
		var arrlen = arr.length - 1;
		if(arr.length == 0) { done(); }
		arr.forEach(function(val, key) {
			cb(val, key);
			if(arrcur == arrlen) {
				done();
			}
			arrcur++;
		});
	} else if(arr.constructor === Object) {
		var arrlen = Object.keys(arr).length - 1;
		if(arr.length == 0) { done(); }
		Object.keys(arr).forEach(function(key) {
			cb(arr[key], key);
			if(arrcur == arrlen) {
				done();
			}
			arrcur++;
		});
	} else if(arr.constructor === String) {
		var arrlen = arr.split('').length;
		if(arr.length == 0) { done(); }
		arr.split('').forEach(function(val, key) {
			cb(val, key);
			if(arrcur == arrlen) {
				done();
			}
			arrcur++;
		});
	} else {
		throw new TypeError("Unable to iterate " + arr.constructor);
	}
};
