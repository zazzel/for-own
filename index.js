/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var forIn = require('for-in');

module.exports = function forOwn(o, fn, thisArg) {
  forIn(o, function (val, key) {
    if (o.hasOwnProperty(key)) {
      return fn.call(thisArg, o[key], key, o);
    }
  });
};