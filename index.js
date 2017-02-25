'use strict';

const map = require('pull-stream/throughs/map');

module.exports = function fmap (mapper) {
  return map(x => {
    if (typeof x.map !== 'function') throw new Error(`${x} is not a functor`);
    return x.map(mapper);
  });
};
