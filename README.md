# nano-clone

> nano version for deep clone.

[![Ver](https://img.shields.io/npm/v/nano-clone.svg)](https://www.npmjs.com/package/nano-clone) [![Build Status](https://travis-ci.org/NanoPackage/nano-clone.svg?branch=master)](https://travis-ci.org/NanoPackage/nano-clone) [![Coverage Status](https://coveralls.io/repos/github/hustcc/nano-clone/badge.svg?branch=master)](https://coveralls.io/github/NanoPackage/nano-clone) [![npm download](https://img.shields.io/npm/dm/nano-clone.svg)](https://www.npmjs.com/package/nano-clone)


## 1. Usage

> **npm i --save nano-clone**

Then import it.

```js
import clone from 'nano-clone'; // ES6

var v = {
  a: 1,
  b: '2',
  c: new Date(),
  d: /\d/,
  e: null,
  f: undefined,
  x: [1, '2', new Date(), /\w/, null, undefined],
  y: {
    a: 1,
    b: '2',
    c: new Date(),
    d: /\d/,
    e: null,
    f: undefined,
    x: [1, '2', new Date(), /\w/, null, undefined]
  }
};

var cv = clone(v);
```


## 2. Test

```
npm i

npm t
```


## License

ISC@[hustcc](https://github.com/hustcc).
