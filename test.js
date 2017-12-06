var expect = require('expect');
var clone = require('./');

describe('nano-clone', function() {
  it(' - usage', function () {
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
    expect(cv).toEqual(v);
    expect(cv === v).toBe(false);
    expect(cv.x === v.x).toBe(false);
    expect(cv.y === v.y).toBe(false);
    expect(cv.y.x === v.y.x).toBe(false);
  });

  it(' - replacer', function () {
    var v = {
      a: 1,
      b: [2, '3', new Date()],
      c: {
        d: [2, '3', new Date()]
      },
      e: new Date()
    };
    const cv = clone(v, function(v) {
      return (v instanceof Date) ? 'nano' : v;
    });
    expect(cv).toEqual({
      a: 1,
      b: [2, '3', 'nano'],
      c: {
        d: [2, '3', 'nano']
      },
      e: 'nano'
    });
  });
});
