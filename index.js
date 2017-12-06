/**
 * 替换，如果存在 replacer，则替换为 replacer(src)，
 * @param replacer
 * @param src
 * @param dist
 * @returns {*}
 */
function replace(replacer, src, dist) {
  return replacer ? replacer(src) : dist;
}

/**
 * nano version deep clone
 * @param v
 * @param replacer 可选
 * @returns {*}
 */
function clone(v, replacer) {
  // null, undefined
  if (v === null || v === undefined) return replace(replacer, v, v);

  var t = typeof v;
  // number, string
  if (t === 'number' || t === 'string') return replace(replacer, v, v);

  // TODO Symbol
  // if (t === 'symbol') return replace(replacer, v, v);

  // function
  if (t === 'function') return replace(replacer, v, v);

  // Date
  if (v instanceof Date) return replace(replacer, v, new Date(v.getTime()));

  // RegExp
  if (v instanceof RegExp) return replace(replacer, v, new RegExp(v));

  // array
  if (Array.isArray(v)) {
    return v.map(function(item) {
      return clone(item, replacer);
    });
  }

  // object
  if (v instanceof Object) {
    var nv = {};
    for (var k in v) {
      nv[k] = clone(v[k], replacer);
    }
    return nv;
  }

  // others, keep it
  return v;
}

module.exports = clone;
