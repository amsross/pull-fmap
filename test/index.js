'use strict';

const test = require('tape');
const pull = require('pull-stream');
const fmap = require('../');

test('fmap throughs ends stream', function (t) {
  const err = new Error('unwholesome number');
  pull(
    pull.values([
      [1, 2, 3],
      [3.4, 4],
    ]),
    fmap(function (e) {
      if (e !== ~~e) throw err;
      return 'was a just';
    }),
    pull.drain(null, _err => {
      t.equal(_err, err);
      t.end();
    })
  );
});

test('fmap throws on non-functor values', function (t) {
  pull(
    pull.values([1]),
    fmap(x => x),
    pull.drain(null, _err => {
      t.deepEqual(_err, new Error('1 is not a functor'), 'expected error was thrown');
      t.end();
    })
  );
});
