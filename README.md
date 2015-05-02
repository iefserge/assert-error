## SYNOPSIS

Simple assert function that throws provided error object.

[![Build Status](https://travis-ci.org/iefserge/assert-error.svg)](https://travis-ci.org/iefserge/assert-error)

## USAGE

```js
var assert = require('assert-error');

var myError = new Error('my error');
myError.code = 404;

assert(true === true, myError);
```

##LICENSE

Apache License, Version 2.0
