const test = require('tape');
const pull = require('pull-stream');
const fmap = require('../');

class Just {
  constructor (value) { this.value = value; }
  of (value) { return new Just(value); }
  map (x) { return this.of(x(this.value)); }
};

class Nothing {
  of () { return new Nothing(); }
  map (x) { return this.of(); }
};

test('map throughs ends stream', function (t) {
  const err = new Error('unwholesome number');
  pull(
    pull.values([
      new Nothing(),
      new Just(1),
      new Just(3),
      new Just(3.4)
    ]),
    fmap(function (e) {
      if (e !== ~~e) throw err;
      return 'was a just';
    }),
    pull.drain(data => {
      if (data instanceof Just) t.equal(data.value, 'was a just', 'Just has expected value');
      if (data instanceof Nothing) t.notOk(data.value, 'Nothing has no value');
    }, _err => {
      t.equal(_err, err);
      t.end();
    })
  );
});
