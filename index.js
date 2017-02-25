'use strict';

function id (e) { return e; };
const prop = require('pull-stream/util/prop');

module.exports = function fmap (mapper) {
  if (!mapper) return id;
  mapper = prop(mapper);
  return function (read) {
    return function (abort, cb) {
      read(abort, function (end, data) {
        try {
          data = !end ? data.map(mapper) : null;
        } catch (err) {
          return read(err, function () {
            return cb(err);
          });
        }
        cb(end, data);
      });
    };
  };
};
