module.exports = function(arr, cb, done) {
	var arrcur = 0;
	var arrlen = arr.length - 1;
	if(arr.constructor === Array) {
		arr.forEach(function(val, key) {
			cb(val, key);
			if(arrcur == arrlen) {
				done();
			}
			arrcur++;
		});
	} else if(arr.constructor === Object) {
		var arrcur = 0;
		var arrlen = Object.keys(arr).length - 1;
		Object.keys(arr).forEach(function(key) {
			cb(arr[key], key);
			if(arrcur == arrlen) {
				done();
			}
			arrcur++;
		});
	} else if(arr.constructor === String) {
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
