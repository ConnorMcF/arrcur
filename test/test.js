var assert = require('assert');
var arrcur = require('../app');
describe('Arrcur', function() {
	describe('Arrays', function() {
		it('should work with arrays', function() {
			var vals = [];
			arrcur([1, 2, 3, 4, 5, 6], function(val, key) {
				vals.push([val, key]);
			}, function() {
				assert.equal(JSON.stringify([
					[1, 0],
					[2, 1],
					[3, 2],
					[4, 3],
					[5, 4],
					[6, 5]
				]), JSON.stringify(vals));
			});
		});
		it('should work with empty arrays', function() {
			arrcur([], function(val, key) {
				assert.fail("Should not iterate");
			}, function() {
				// done
			});
		});
	});
	describe('Objects', function() {
		it('should work with objects', function() {
			var vals = [];
			arrcur({
				a: "b",
				b: "c",
				c: "d"
			}, function(val, key) {
				vals.push([val, key]);
			}, function() {
				assert.equal(JSON.stringify([
					["b","a"],
					["c","b"],
					["d","c"]
				]), JSON.stringify(vals));
			});
		});
		it('should work with empty objects', function() {
			arrcur({}, function(val, key) {
				assert.fail("Should not iterate");
			}, function() {
				// done
			});
		});
	});
	describe('Strings', function() {
		it('should work with strings', function() {
			var vals = [];
			arrcur("hello world!", function(val, key) {
				vals.push([val, key]);
			}, function() {
				assert.equal(JSON.stringify([
					["h",0],
					["e",1],
					["l",2],
					["l",3],
					["o",4],
					[" ",5],
					["w",6],
					["o",7],
					["r",8],
					["l",9],
					["d",10]
					,["!",11]
				]), JSON.stringify(vals));
			});
		});
		it('should work with empty strings', function() {
			arrcur("", function(val, key) {
				assert.fail("Should not iterate");
			}, function() {
				// done
			});
		});
	});
	describe('Numbers', function() {
		it('should not work with ints', function() {
			try {
				arrcur(101, function(val, key) {
					assert.fail("Should not iterate");
				}, function() {
					assert.fail("Should not complete");
				});
			} catch(e) {
				assert.equal(TypeError, e.constructor);
			}
		});
		it('should not work with floats', function() {
			try {
				arrcur(101.01, function(val, key) {
					assert.fail("Should not iterate");
				}, function() {
					assert.fail("Should not complete");
				});
			} catch(e) {
				assert.equal(TypeError, e.constructor);
			}
		});
	});
	describe('Boolean', function() {
		it('should not work with true', function() {
			try {
				arrcur(true, function(val, key) {
					assert.fail("Should not iterate");
				}, function() {
					assert.fail("Should not complete");
				});
			} catch(e) {
				assert.equal(TypeError, e.constructor);
			}
		});
		it('should not work with false', function() {
			try {
				arrcur(true, function(val, key) {
					assert.fail("Should not iterate");
				}, function() {
					assert.fail("Should not complete");
				});
			} catch(e) {
				assert.equal(TypeError, e.constructor);
			}
		});
	});
});
