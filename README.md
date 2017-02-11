# arrcur v1.0.0

Iterates over an array and callsback on completion.

[![CircleCI](https://circleci.com/gh/ConnorMcF/arrcur.svg?style=svg)](https://circleci.com/gh/ConnorMcF/arrcur)

## Installation

Using npm:
```shell
npm install arrcur --save
```

## Usage

In Node.js:
```js
var arrcur = require('arrcur');
arrcur([1, 2, 3, 4, 5, 6], function(val, key) {
	console.log(val, key);
}, function() {
	console.log('Done!');
});
```

Accepted types:
- Arrays - each value
- Objects - each value
- Strings - each character

## Test

Tests are written in mocha, install dev-dependencies then run:
```shell
npm test
```
