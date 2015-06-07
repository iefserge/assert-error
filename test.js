// Copyright 2015 Sergii Iefremov
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var test = require('tape');
var assert = require('./');

test('assert using correct error object', function(t) {
  var error = new Error('my error');
  error.code = 404;

  t.doesNotThrow(function() {
    assert(true, error);
  });

  t.throws(function() {
    assert(false, error);
  });

  t.throws(function() {
    assert(void 0, error);
  });

  t.throws(function() {
    try {
      assert(0, error);
    } catch (e) {
      t.ok(e);
      t.equal(e.message, 'my error');
      t.equal(e.code, 404);
      throw e;
    }
  });

  t.end();
});

test('should throw when there are no error object', function(t) {
  var error = new Error();
  error.code = 404;

  t.throws(function() {
    try {
      assert(true);
    } catch (e) {
      t.ok(e);
      t.equal(e.message, 'error required');
      throw e;
    }
  });

  t.throws(function() {
    try {
      assert(false);
    } catch (e) {
      t.ok(e);
      t.equal(e.message, 'error required');
      throw e;
    }
  });

  t.end();
});
