<<<<<<< HEAD
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = require('fs');
var path = require('path');
var isArray = require('lodash/isArray');

var _require = require('uuid'),
    v4 = _require.v4;

var DA = require('digitalanarchy.helpers');
var Parse = require('path-parse');

var requestJSON = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var response, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', json);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function requestJSON(_x) {
    return _ref.apply(this, arguments);
  };
}();
console.log(fs);

var loadJSONTS = function loadJSONTS() {
  var csInterface = new CSInterface();
  var file = fs.readFileSync(path.join(csInterface.getSystemPath(SystemPath.MY_DOCUMENTS), 'Transcriptive', 'Alexia.json'));
  console.log(file);
};

var insertClip = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(clip) {
    var clipData, treePath, inTime, outTime, inserted, resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return window.evalFunctionJSON('$._PPP_.findClipByName', [clip.clipName + '.mp4', true]);

          case 2:
            clipData = _context2.sent;
            treePath = clipData.treePath;
            inTime = clip.inPoint;
            outTime = clip.inPoint + clip.duration;

            console.log(treePath);
            console.log('clip.start', clip.start);
            console.log('inTime', inTime);
            console.log('outTime', outTime);
            console.log('end', clip.end);
            console.log('clip.maxDuration', clip.maxDuration);

            //const timeValues = await window.evalFunctionJSON('$._PPP_.extractFrameRate', [clip.clipName, true]);
            /*console.log(treePath);
            console.log(inTime, outTime);
            console.log(timeValues);*/
            // const timecode = window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame });

            _context2.next = 14;
            return window.evalFunction('$._PPP_.addClipToSequenceTimeline', [treePath, clip.start, inTime, outTime]);

          case 14:
            inserted = _context2.sent;
            _context2.next = 17;
            return promiseDelay(50);

          case 17:
            resp = window.evalFunctionJSON('$._PPP_.conform', [treePath, clip.start, inTime, outTime, clip.end]);
            _context2.next = 20;
            return promiseDelay(50);

          case 20:
            return _context2.abrupt('return', resp);

          case 21:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function insertClip(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var promiseDelay = function promiseDelay(delay) {
  return new Promise(function (fulfill) {
    return setTimeout(fulfill, delay);
  });
};

=======
(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('uuid'),
    v4 = _require.v4;

var Parse = require('path-parse');

var requestJSON = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var response, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', json);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function requestJSON(_x) {
    return _ref.apply(this, arguments);
  };
}();

var insertClip = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(clip) {
    var clipData, treePath, inTime, outTime;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return window.evalFunctionJSON('$._PPP_.findClipByName', [clip.clipName + '.mp4', true]);

          case 2:
            clipData = _context2.sent;
            treePath = clipData.treePath;

            console.log(clipData);
            console.log(treePath);
            inTime = clip.startTime.toFixed(3).toString();
            outTime = (clip.startTime + clip.duration).toFixed(3).toString();

            //const timeValues = await window.evalFunctionJSON('$._PPP_.extractFrameRate', [clip.clipName, true]);
            /*console.log(treePath);
            console.log(inTime, outTime);
            console.log(timeValues);*/
            // const timecode = window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame });

            return _context2.abrupt('return', window.evalFunction('$._PPP_.addClipToSequenceTimeline', [treePath, window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: 59.7, dropFrame: false }), window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: 59.7, dropFrame: false })]
            /*window.DigitalAnarchy.Timecode.fromSeconds(inTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),
            window.DigitalAnarchy.Timecode.fromSeconds(outTime, { frameRate: timeValues.frameRate, dropFrame: timeValues.dropFrame }),*/
            ));

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function insertClip(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
window.InsertClips = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
}));

/*************
*

THE START TIMES ARE ACCORDING TO THE TIMELINE IN THE DATA

WE NEED TO CONVERT TO CLIP IN/OUT TIMES




*************/

<<<<<<< HEAD
var SIMULATE = {
  removeWordsMiddle: function removeWordsMiddle(transcript) {
    var toRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var maxWordsPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

    var words = [].concat(_toConsumableArray(transcript.words));
    var wordNumToRemove = !!toRemove ? toRemove : Math.floor(words.length * (Math.random() * maxWordsPercent / 100));
    var _i = 0;
    while (wordNumToRemove > 0) {
      if (Math.random() > 0.5) {
        words.splice(_i, 1);
        wordNumToRemove--;
      }
      _i = (_i + 1) % words.length;
    }
    return _extends({}, transcript, { words: words });
  },
  removeRange: function removeRange(transcript) {
    var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];

    var words = [].concat(_toConsumableArray(transcript.words));
    if (range[1]) {
      words.splice(range[0], range[1]);
    }
    return _extends({}, transcript, { words: words });
  }
};

window.Conform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var transcripts, transcriptsAlter, clipJson, conformingClips, presetName, seqName, binName, seqID, userName, csInterface, OSVersion, sep, v, presetPath, seqResponse, insertResponse;
=======
window.Conform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var transcripts, clipJson, conformingClips, presetName, seqName, binName, seqID, userName, csInterface, OSVersion, sep, v, presetPath, seqResponse, insertResponse;
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
<<<<<<< HEAD
          return requestJSON('http://0.0.0.0:4433/flattened_raw.json');
=======
          return requestJSON('http://0.0.0.0:4433/output.json');
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021

        case 2:
          transcripts = _context4.sent;
          _context4.next = 5;
<<<<<<< HEAD
          return requestJSON('http://0.0.0.0:4433/flattened_altered.json');

        case 5:
          transcriptsAlter = _context4.sent;
          _context4.next = 8;
          return requestJSON('http://0.0.0.0:4433/clipData.json');

        case 8:
          clipJson = _context4.sent;
          conformingClips = DA.Conforming.compare2(transcripts, transcriptsAlter, clipJson, {
            useWordGaps: false
          });

          loadJSONTS();
          console.log(conformingClips);
          presetName = 'PProPanel';
          seqName = 'Conformed sequence 3';
          binName = 'newBin';
          seqID = uuidv4();
          _context4.next = 18;
          return window.evalFunction('$._PPP_.getUserName', []);

        case 18:
=======
          return requestJSON('http://0.0.0.0:4433/clipData.json');

        case 5:
          clipJson = _context4.sent;
          conformingClips = window.DigitalAnarchy.Conforming.fromJSON(transcripts, clipJson);
          presetName = 'PProPanel';
          seqName = 'Conformed sequence';
          binName = 'newBin';
          seqID = uuidv4();
          _context4.next = 13;
          return window.evalFunction('$._PPP_.getUserName', []);

        case 13:
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
          userName = _context4.sent;
          csInterface = new CSInterface();
          OSVersion = csInterface.getOSInformation();
          sep = OSVersion.indexOf('Windows') >= 0 ? '\\' : '/';
          v = csInterface.hostEnvironment.appVersion.substring(0, 2) + '.0';
          presetPath = '' + csInterface.getSystemPath(SystemPath.MY_DOCUMENTS) + sep + 'Adobe' + sep + 'Premiere Pro' + sep + v + sep + 'Profile-' + userName + sep + 'Settings' + sep + 'Custom' + sep + presetName + '.sqpreset';
<<<<<<< HEAD
=======

          console.log(presetPath);
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
          // await window.evalFunction('$._PPP_.cloneSequence', [])

          //const rr = await window.evalFunctionJSON('$._PPP_.findClipByName', ["Alexia", true]);
          //console.log(rr);
          /* const seqResponse = await window.evalFunction('$._PPP_.createSequence', [
            seqName,
            seqID,
            true,
            binName,
            true
          ]);*/

<<<<<<< HEAD
          _context4.next = 26;
          return window.evalFunctionJSON('$._PPP_.createSequenceFromPreset', [seqName, presetPath, true]);

        case 26:
          seqResponse = _context4.sent;
          _context4.next = 29;
=======
          _context4.next = 22;
          return window.evalFunctionJSON('$._PPP_.createSequenceFromPreset', [seqName, presetPath]);

        case 22:
          seqResponse = _context4.sent;
          _context4.next = 25;
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
          return conformingClips.reduce(function (promise, clip) {
            return promise.then(function (result) {
              return insertClip(clip).then(Array.prototype.concat.bind(result));
            });
          }, Promise.resolve([]));

<<<<<<< HEAD
        case 29:
          insertResponse = _context4.sent;

          console.log(insertResponse);
          // clipJson.forEach(createClip);

          /*console.log(clipJson);
          console.log(clipNames);*/

        case 31:
=======
        case 25:
          insertResponse = _context4.sent;

        case 26:
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
}));

<<<<<<< HEAD
},{"digitalanarchy.helpers":12,"fs":2,"lodash/isArray":3,"path":4,"path-parse":5,"uuid":7}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],4:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":6}],5:[function(require,module,exports){
(function (process){
'use strict';

var isWindows = process.platform === 'win32';

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

win32.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};



// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


posix.parse = function(pathString) {
  if (typeof pathString !== 'string') {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


if (isWindows)
  module.exports = win32.parse;
else /* posix */
  module.exports = posix.parse;

module.exports.posix = posix.parse;
module.exports.win32 = win32.parse;

}).call(this,require('_process'))
},{"_process":6}],6:[function(require,module,exports){
=======
},{"path-parse":3,"uuid":4}],2:[function(require,module,exports){
>>>>>>> 087b2bdb38847c209f5a0d66645d0dcb6747e021
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],7:[function(require,module,exports){
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":10,"./v4":11}],8:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],9:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],10:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":8,"./lib/rng":9}],11:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":8,"./lib/rng":9}],12:[function(require,module,exports){
module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=126)}([function(t,e,r){var n=r(31),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(110),o=r(104);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(10),o=r(108),i=r(107),a="[object Null]",u="[object Undefined]",s=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:s&&s in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(6),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},function(t,e,r){var n=r(4),o=r(3),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==i}},function(t,e,r){var n=r(95);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(2)(Object,"create");t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e,r){var n=r(33);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(120),o=r(119),i=r(118),a=r(117),u=r(116);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,e,r){var n=r(1),o=r(6),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}},function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,e,r){var n=r(74),o=r(67),i=r(22);t.exports=function(t){return i(t)?n(t):o(t)}},function(t,e,r){var n=r(103),o=r(96),i=r(94),a=r(93),u=r(92);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,e,r){var n=r(2)(r(0),"Map");t.exports=n},function(t,e,r){var n=r(1),o=r(13),i=r(55),a=r(52);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,r){var n=r(18),o=r(5);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},function(t,e){t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},function(t,e,r){var n=r(9);t.exports=function(t){return t==t&&!n(t)}},function(t,e,r){var n=r(32),o=r(14);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e,r){var n=r(70),o=r(69),i=r(68),a=i&&i.isTypedArray,u=a?o(a):n;t.exports=u},function(t,e){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){(function(t){var n=r(0),o=r(71),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i?n.Buffer:void 0,s=(u?u.isBuffer:void 0)||o;t.exports=s}).call(this,r(25)(t))},function(t,e,r){var n=r(72),o=r(3),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},function(t,e,r){var n=r(90),o=r(87),i=r(86),a=1,u=2;t.exports=function(t,e,r,s,c,f){var l=r&a,p=t.length,h=e.length;if(p!=h&&!(l&&h>p))return!1;var v=f.get(t);if(v&&f.get(e))return v==e;var m=-1,d=!0,y=r&u?new n:void 0;for(f.set(t,e),f.set(e,t);++m<p;){var b=t[m],g=e[m];if(s)var x=l?s(g,b,m,e,t,f):s(b,g,m,t,e,f);if(void 0!==x){if(x)continue;d=!1;break}if(y){if(!o(e,function(t,e){if(!i(y,e)&&(b===t||c(b,t,r,s,f)))return y.push(e)})){d=!1;break}}else if(b!==g&&!c(b,g,r,s,f)){d=!1;break}}return f.delete(t),f.delete(e),d}},function(t,e,r){var n=r(91),o=r(3);t.exports=function t(e,r,i,a,u){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,i,a,t,u))}},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(109))},function(t,e,r){var n=r(4),o=r(9),i="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==a||e==u||e==i||e==s}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(12),o=r(115),i=r(114),a=r(113),u=r(112),s=r(111);function c(t){var e=this.__data__=new n(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=u,c.prototype.set=s,t.exports=c},function(t,e,r){var n=r(122),o=r(57),i=r(46),a=r(1),u=r(45);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?a(t)?o(t[0],t[1]):n(t):u(t)}},function(t,e,r){var n=r(123),o=r(35),i=r(42),a=Math.max;t.exports=function(t,e,r){var u=null==t?0:t.length;if(!u)return-1;var s=null==r?0:i(r);return s<0&&(s=a(u+s,0)),n(t,o(e,3),s)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e,r,n,i,a){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.frameRate=e,this.dropFrame=1001===Math.round(Math.ceil(this.frameRate)/this.frameRate*1e3)&&[30,60].includes(Math.ceil(this.frameRate)),void 0===r||"object"===o(r)?(this.time=0,void 0===this.frameRate||"object"===o(this.frameRate)?(void 0!==e&&(this.frameRate=e.frameRate||30),this.setOptions(e||u)||this.updateFields()):this.setOptions(r||u)||this.updateFields()):void 0===n||"object"===o(n)?(this.time=r,this.setOptions(n||u)||this.updateFields()):(this.hours=r,this.minutes=n,this.seconds=i,this.frames=a,this.setOptions(u)||this.updateTime())}var e,r,n;return e=t,n=[{key:"fromSeconds",value:function(e,r){return new t(r.frameRate,e,r).toString()}},{key:"fromTimecode",value:function(e,r){var n=new t(r.frameRate,r);return n.parse(e),n.time}}],(r=[{key:"updateFields",value:function(){if(void 0===this.frameRate)throw new Error("frameRate is undefined.");var t=this.time*this.frameRate;if(this.dropFrame){var e=Math.floor(this.time*Math.ceil(this.frameRate)/this.frameRate/60);t+=2*(e-Math.floor(e/10))}t=Math.round(t),this.absoluteFrame=t,this.frames=Math.round(t%Math.ceil(this.frameRate));var r=Math.round((t-this.frames)/Math.ceil(this.frameRate));this.seconds=Math.round(r%60);var n=Math.round((r-this.seconds)/60);this.minutes=Math.round(n%60),this.hours=Math.round((n-this.minutes)/60)}},{key:"updateTime",value:function(){if(void 0===this.frameRate)throw new Error("frameRate is undefined.");if(this.dropFrame){var t=60*this.hours+this.minutes,e=(60*t+this.seconds)*Math.ceil(this.frameRate);e+=this.frames,e-=2*(t-Math.floor(t/10)),this.absoluteFrame=e,this.time=e/this.frameRate}else this.time=3600*this.hours+60*this.minutes+this.seconds,this.absoluteFrame=this.time*this.frameRate+this.frames,this.time+=this.frames/Math.ceil(this.frameRate),this.time*=Math.ceil(this.frameRate)/this.frameRate}},{key:"parse",value:function(t){var e=t;if(4!==(e=(e=(e=e.replace(/;/g,":")).replace(/[.]/g,":")).split(":")).length)return!1;this.hours=Number(e[0]),this.minutes=Number(e[1]),this.seconds=Number(e[2]),this.frames=Number(e[3]),this.updateTime()}},{key:"getFrameRate",value:function(){return this.frameRate}},{key:"getTime",value:function(){return this.time}},{key:"getHours",value:function(){return this.hours}},{key:"getMinutes",value:function(){return this.minutes}},{key:"getSeconds",value:function(){return this.seconds}},{key:"getFrames",value:function(){return this.frames}},{key:"getAbsoluteFrame",value:function(){return this.absoluteFrame}},{key:"setFrameRate",value:function(t,e){this.frameRate!==t&&(this.frameRate=t,this.dropFrame=void 0===e||null===e?1001===Math.round(Math.ceil(this.frameRate)/this.frameRate*1e3)&&[30,60].includes(Math.ceil(this.frameRate)):e,this.updateFields())}},{key:"setOptions",value:function(t){if(void 0!==t.style)switch(t.style.toUpperCase()){case"SRT":this.separator=":",this.lastSeparator=",",this.setFrameRate(1e3);break;case"VTT":this.separator=":",this.lastSeparator=".",this.setFrameRate(1e3);break;case"STL":case"SMPTE":this.separator=":",this.lastSeparator=":";break;case"SCC":this.separator=":",this.lastSeparator=null}return void 0!==t.dropFrame&&null!==t.dropFrame&&(this.dropFrame=t.dropFrame),void 0!==t.frameRate&&this.setFrameRate(t.frameRate,t.dropFrame),void 0!==t.separator&&(this.separator=t.separator),void 0!==t.lastSeparator&&(this.lastSeparator=t.lastSeparator),void 0!==t.time?(this.time=t.time,this.updateFields(),!0):void 0!==t.hours&&(this.hours=t.hours,this.minutes=t.minutes,this.seconds=t.seconds,this.frames=t.frames,this.updateTime(),!0)}},{key:"setTime",value:function(t){this.time=t,this.updateFields()}},{key:"setHours",value:function(t){this.hours=t,this.updateTime()}},{key:"setMinutes",value:function(t){this.minutes=t,this.updateTime()}},{key:"setSeconds",value:function(t){this.seconds=t,this.updateTime()}},{key:"setFrames",value:function(t){this.frames=t,this.updateTime()}},{key:"addFrames",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.frames+=t,this.frames>=this.frameRate){var e=Math.floor(this.frames/Math.ceil(this.frameRate));if(this.seconds+=e,this.frames-=Math.ceil(this.frameRate)*e,this.seconds>=60){var r=Math.floor(this.seconds/60);if(this.minutes+=r,this.seconds-=60*r,this.minutes>=60){var n=Math.floor(this.minutes/60);this.hours+=n,this.minutes-=60*n}}}this.updateTime()}},{key:"toSRT",value:function(){var t=",";return this.dropFrame&&(t=","),u(this.hours)+":"+u(this.minutes)+":"+u(this.seconds)+t+s(this.frames)}},{key:"toVTT",value:function(){var t=".";return this.dropFrame&&(t="."),u(this.hours)+":"+u(this.minutes)+":"+u(this.seconds)+t+s(this.frames)}},{key:"toSTL",value:function(){var t=":";return this.dropFrame&&(t=":"),u(this.hours)+":"+u(this.minutes)+":"+u(this.seconds)+t+u(this.frames)}},{key:"toSCC",value:function(){var t=":";return this.dropFrame&&(t=";"),u(this.hours)+":"+u(this.minutes)+":"+u(this.seconds)+t+u(this.frames)}},{key:"toSMPTE",value:function(){return this.toSTL()}},{key:"toString",value:function(){var t=this.dropFrame?";":":",e=this.separator||t,r=this.lastSeparator||(void 0!==this.lastSeparator?e:t),n=this.frameRate>=1e3?s(this.frames):u(this.frames);return u(this.hours)+e+u(this.minutes)+e+u(this.seconds)+r+n}}])&&i(e.prototype,r),n&&i(e,n),t}(),u=function(t){return("00"+t).slice(-2)},s=function(t){return("000"+t).slice(-3)};t.exports=a},function(t,e,r){var n=r(35),o=r(22),i=r(15);t.exports=function(t){return function(e,r,a){var u=Object(e);if(!o(e)){var s=n(r,3);e=i(e),r=function(t){return s(u[t],t,u)}}var c=t(e,r,a);return c>-1?u[s?e[c]:c]:void 0}}},function(t,e,r){var n=r(38)(r(36));t.exports=n},function(t,e,r){var n=r(9),o=r(6),i=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=s.test(t);return r||c.test(t)?f(t.slice(2),r?2:8):u.test(t)?i:+t}},function(t,e,r){var n=r(40),o=1/0,i=1.7976931348623157e308;t.exports=function(t){return t?(t=n(t))===o||t===-o?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},function(t,e,r){var n=r(41);t.exports=function(t){var e=n(t),r=e%1;return e==e?r?e-r:e:0}},function(t,e,r){var n=r(19);t.exports=function(t){return function(e){return n(e,t)}}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,r){var n=r(44),o=r(43),i=r(13),a=r(5);t.exports=function(t){return i(t)?n(a(t)):o(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(18),o=r(27),i=r(1),a=r(24),u=r(14),s=r(5);t.exports=function(t,e,r){for(var c=-1,f=(e=n(e,t)).length,l=!1;++c<f;){var p=s(e[c]);if(!(l=null!=t&&r(t,p)))break;t=t[p]}return l||++c!=f?l:!!(f=null==t?0:t.length)&&u(f)&&a(p,f)&&(i(t)||o(t))}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,r){var n=r(48),o=r(47);t.exports=function(t,e){return null!=t&&o(t,e,n)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(10),o=r(50),i=r(1),a=r(6),u=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-u?"-0":r}},function(t,e,r){var n=r(51);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(16),o="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(i.Cache||n),r}i.Cache=n,t.exports=i},function(t,e,r){var n=r(53),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},function(t,e,r){var n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r(54)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,function(t,r,n,i){e.push(n?i.replace(o,"$1"):r||t)}),e});t.exports=i},function(t,e,r){var n=r(19);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n=r(29),o=r(56),i=r(49),a=r(13),u=r(21),s=r(20),c=r(5),f=1,l=2;t.exports=function(t,e){return a(t)&&u(e)?s(c(t),e):function(r){var a=o(r,t);return void 0===a&&a===e?i(r,t):n(e,a,f|l)}}},function(t,e,r){var n=r(21),o=r(15);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var i=e[r],a=t[i];e[r]=[i,a,n(a)]}return e}},function(t,e,r){var n=r(2)(r(0),"WeakMap");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(2)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(62),o=r(17),i=r(61),a=r(60),u=r(59),s=r(4),c=r(30),f=c(n),l=c(o),p=c(i),h=c(a),v=c(u),m=s;(n&&"[object DataView]"!=m(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=m(new o)||i&&"[object Promise]"!=m(i.resolve())||a&&"[object Set]"!=m(new a)||u&&"[object WeakMap]"!=m(new u))&&(m=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?c(r):"";if(n)switch(n){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case v:return"[object WeakMap]"}return e}),t.exports=m},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(64)(Object.keys,Object);t.exports=n},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(66),o=r(65),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e,r){(function(t){var n=r(31),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.process,u=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,r(25)(t))},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){var n=r(4),o=r(14),i=r(3),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[n(t)]}},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(4),o=r(3),i="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==i}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(73),o=r(27),i=r(1),a=r(26),u=r(24),s=r(23),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),f=!r&&o(t),l=!r&&!f&&a(t),p=!r&&!f&&!l&&s(t),h=r||f||l||p,v=h?n(t.length,String):[],m=v.length;for(var d in t)!e&&!c.call(t,d)||h&&("length"==d||l&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,m))||v.push(d);return v}},function(t,e){t.exports=function(){return[]}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}},function(t,e,r){var n=r(76),o=r(75),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),n(a(t),function(e){return i.call(t,e)}))}:o;t.exports=u},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(78),o=r(1);t.exports=function(t,e,r){var i=e(t);return o(t)?i:n(i,r(t))}},function(t,e,r){var n=r(79),o=r(77),i=r(15);t.exports=function(t){return n(t,i,o)}},function(t,e,r){var n=r(80),o=1,i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,u,s){var c=r&o,f=n(t),l=f.length;if(l!=n(e).length&&!c)return!1;for(var p=l;p--;){var h=f[p];if(!(c?h in e:i.call(e,h)))return!1}var v=s.get(t);if(v&&s.get(e))return v==e;var m=!0;s.set(t,e),s.set(e,t);for(var d=c;++p<l;){var y=t[h=f[p]],b=e[h];if(a)var g=c?a(b,y,h,e,t,s):a(y,b,h,t,e,s);if(!(void 0===g?y===b||u(y,b,r,a,s):g)){m=!1;break}d||(d="constructor"==h)}if(m&&!d){var x=t.constructor,_=e.constructor;x!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof _&&_ instanceof _)&&(m=!1)}return s.delete(t),s.delete(e),m}},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e,r){var n=r(10),o=r(84),i=r(33),a=r(28),u=r(83),s=r(82),c=1,f=2,l="[object Boolean]",p="[object Date]",h="[object Error]",v="[object Map]",m="[object Number]",d="[object RegExp]",y="[object Set]",b="[object String]",g="[object Symbol]",x="[object ArrayBuffer]",_="[object DataView]",j=n?n.prototype:void 0,w=j?j.valueOf:void 0;t.exports=function(t,e,r,n,j,O,S){switch(r){case _:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case x:return!(t.byteLength!=e.byteLength||!O(new o(t),new o(e)));case l:case p:case m:return i(+t,+e);case h:return t.name==e.name&&t.message==e.message;case d:case b:return t==e+"";case v:var T=u;case y:var k=n&c;if(T||(T=s),t.size!=e.size&&!k)return!1;var M=S.get(t);if(M)return M==e;n|=f,S.set(t,e);var R=a(T(t),T(e),n,j,O,S);return S.delete(t),R;case g:if(w)return w.call(t)==w.call(e)}return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){var r="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,r),this}},function(t,e,r){var n=r(16),o=r(89),i=r(88);function a(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,t.exports=a},function(t,e,r){var n=r(34),o=r(28),i=r(85),a=r(81),u=r(63),s=r(1),c=r(26),f=r(23),l=1,p="[object Arguments]",h="[object Array]",v="[object Object]",m=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,d,y,b){var g=s(t),x=s(e),_=g?h:u(t),j=x?h:u(e),w=(_=_==p?v:_)==v,O=(j=j==p?v:j)==v,S=_==j;if(S&&c(t)){if(!c(e))return!1;g=!0,w=!1}if(S&&!w)return b||(b=new n),g||f(t)?o(t,e,r,d,y,b):i(t,e,_,r,d,y,b);if(!(r&l)){var T=w&&m.call(t,"__wrapped__"),k=O&&m.call(e,"__wrapped__");if(T||k){var M=T?t.value():t,R=k?e.value():e;return b||(b=new n),y(M,R,r,d,b)}}return!!S&&(b||(b=new n),a(t,e,r,d,y,b))}},function(t,e,r){var n=r(7);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(7);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(7);t.exports=function(t){return n(this,t).get(t)}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(7);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e,r){var n=r(8),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(8),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return i.call(e,t)?e[t]:void 0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(8);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e,r){var n=r(101),o=r(100),i=r(99),a=r(98),u=r(97);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,e,r){var n=r(102),o=r(12),i=r(17);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e,r){var n,o=r(105),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(10),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(32),o=r(106),i=r(9),a=r(30),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,f=s.toString,l=c.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?p:u).test(a(t))}},function(t,e,r){var n=r(12),o=r(17),i=r(16),a=200;t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var u=r.__data__;if(!o||u.length<a-1)return u.push([t,e]),this.size=++r.size,this;r=this.__data__=new i(u)}return r.set(t,e),this.size=r.size,this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e,r){var n=r(12);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e,r){var n=r(11);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(11);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(11);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(11),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(34),o=r(29),i=1,a=2;t.exports=function(t,e,r,u){var s=r.length,c=s,f=!u;if(null==t)return!c;for(t=Object(t);s--;){var l=r[s];if(f&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++s<c;){var p=(l=r[s])[0],h=t[p],v=l[1];if(f&&l[2]){if(void 0===h&&!(p in t))return!1}else{var m=new n;if(u)var d=u(h,v,p,t,e,m);if(!(void 0===d?o(v,h,i|a,u,m):d))return!1}}return!0}},function(t,e,r){var n=r(121),o=r(58),i=r(20);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},function(t,e){t.exports=function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){s(t,e,r[e])})}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=function(t){return t[t.length-1]},f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,n=[{key:"toSubClips",value:function(t){for(var e=[],r=function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r],o=Math.max(r-1,0);if(n.clipName===t[o].clipName&&e.length){c(e).endTime=n.endTime;var i=a(c(e).words).concat(a(n.words));c(e).words=i}else e.push(u({},n))}return e}(t),n=0,i=function(t){var o=r[t],i=Math.max(t-1,0),a=o.words;return o.clipName===r[i].clipName&&e.length&&!r[i].disabled||(n=o.startTime,e.push({clipName:o.clipName,startTime:0})),a.forEach(function(t,r){var i=a[Math.min(r+1,a.length-1)];c(e).endTime=t.endTime-n+.25,c(e).duration=c(e).endTime-c(e).startTime,t.nextStartTime!==i.startTime&&r<a.length-1&&e.push({clipName:o.clipName,startTime:i.nextStartTime-n-.25})}),{v:e}},s=0;s<r.length;s++){var f=i(s);if("object"===o(f))return f.v}}}],(r=null)&&i(e.prototype,r),n&&i(e,n),t}();t.exports=f},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){c(t,e,r[e])})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=r(124),l=r(36),p=r(39),h=function(t){return t[t.length-1]},v=function(t,e){return t?t.filter(function(t){return t.clipName===e})[0]:{}},m=function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r],o=Math.max(r-1,0);if(n.clipName===t[o].clipName&&e.length){h(e).endTime=n.endTime;var i=u(h(e).words).concat(u(n.words));h(e).words=i}else e.push(s({},n))}return e},d=function(t){return t.endTime-t.startTime},y=function(t,e){return e?Math.abs(t.startTime-e.endTime):0},b=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.assign({clipName:t.clipName,inPoint:0,duration:0,wordIds:[]},r)},g=function(t,e){return p(t,{id:e.id})},x=function(t){return h(t)?h(t).start+h(t).duration:0},_=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,f),r=e,o=[{key:"getTranscriptDuration",value:function(t){return t.words.reduce(function(e,r,n){return e+(r.endTime-r.startTime+(n>0?r.startTime-t.words[n-1].endTime:0))},0)}},{key:"getTranscriptBoundsDuration",value:function(t){return t.endTime-t.startTime}},{key:"fromJSON",value:function(t,r){for(var n,o,i=[],a=0;a<t.length;a++){var u=t[a],s=Math.max(a-1,0);u.disabled||(u.clipName===t[s].clipName&&i.length?i[i.length-1].duration+=e.getTranscriptDuration(u):i.push(Object.assign({clipName:u.clipName},(n=v(r,u.clipName),o=void 0,o={inPoint:0},n.inPoint&&(o.inPoint+=n.inPoint.seconds),o),{duration:e.getTranscriptDuration(u)})))}return i}},{key:"compare2",value:function(t,e,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{gap:.01},o=[],i=m(t),a=m(e),u=0;u<i.length;u++){var s=Math.max(u-1,0),c=i[u],f=g(a,c),p=v(r,f.clipName);if(f.disabled)o.push(b(f,r,{inPoint:f.endTime,start:x(o)}));else{f.clipName===a[s].clipName&&o.length||(console.log("\t new clip ".concat(f.clipName," starting at: ").concat(x(o))),o.push(b(f,r,{start:x(o)+n.gap,duration:f.startTime-p.start.seconds,end:0})));for(var _=void 0,j=0;j<c.words.length;j++){_=h(o);var w=c.words[Math.max(j-1,0)],O=c.words[j],S=l(f.words,{wordId:O.wordId}),T=n.useWordGaps?d(O):n.gap;if(S<0)if(_.wordIds.length){var k=x(o)+T;o.push(b(f,r,{duration:0,inPoint:_.inPoint+_.duration+d(O),start:k,end:k}))}else _.inPoint+=d(O)+y(O,w);else _.wordIds.push(O.wordId),_.wordIds.length>1&&(_.duration+=y(O,w)),_.maxDuration=f.endTime-f.startTime,_.duration+=d(O),_.duration=Math.min(_.duration,f.endTime-f.startTime-3),_.end=_.start+_.duration}console.log("transcript ".concat(f.clipName,", should be NO LONGER THAN: ").concat(f.endTime-f.startTime))}}return function(t){return t.filter(function(t){return t.wordIds.length})}(o)}}],(n=null)&&i(r.prototype,n),o&&i(r,o),e}();t.exports=_},function(t,e,r){"use strict";var n={Conforming:r(125),Timecode:r(37)};"undefined"!=typeof window&&(window.DigitalAnarchy=n),t.exports=n}]);
},{}]},{},[1]);
