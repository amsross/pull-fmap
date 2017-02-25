# pull-fmap [![NPM version](https://badge.fury.io/js/pull-fmap.svg)](https://npmjs.org/package/pull-fmap) [![Build Status](https://travis-ci.org/amsross/pull-fmap.svg?branch=master)](https://travis-ci.org/amsross/pull-fmap)

> fmap function for mapping over functors in a pull stream

This is a blatant rip of code from [pull-stream/pull-stream](https://github.com/pull-stream/pull-stream/blob/b97db9e7ed0815998c76014c59a9bfb764eae06d/throughs/map.js).

```js
pull(
  pull.values([ Just('Hello'), Just('World'), Nothing ])
  fmap(x => x.toUpperCase()),
  pull.log()
)

// Just(HELLO)
// Just(WORLD)
// Nothing
```

## Installation

```sh
$ npm install --save pull-fmap
```

## Usage

### `fmap = require('pull-fmap')`

### `fmap((data) => data)`

`fmap(fn)` returns a through stream that calls the given `fn` for each functor's value, in the same order as before. The type of the returned value should be a functor of the same type:
```
fmap :: Functor f => f a ~> (a -> b) -> f b
```

## Install

With [npm](https://npmjs.org/) installed, run

```sh
$ npm install pull-fmap
```

## See Also

- [`fantasyland/fantasy-land`](https://github.com/fantasyland/fantasy-land#functor)

## License

[MIT](https://tldrlegal.com/license/mit-license)
