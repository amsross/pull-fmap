# pull-fmap [![NPM version](https://badge.fury.io/js/pull-fmap.svg)](https://npmjs.org/package/pull-fmap) [![Build Status](https://travis-ci.org/amsross/pull-fmap.svg?branch=master)](https://travis-ci.org/amsross/pull-fmap)

> fmap function for mapping over functors in a pull stream

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

- [`fantasyland/fantasy-land#functor`](https://github.com/fantasyland/fantasy-land#functor)
- [`pull-stream/pull-stream`](https://github.com/pull-stream/pull-stream)

## License

[MIT](https://tldrlegal.com/license/mit-license)
