/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g;
export const camelize = (str) => str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : ''); // eslint-disable-line arrow-parens, no-confusing-arrow

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /([^-])([A-Z])/g;
export const hyphenate = str => str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();

/**
 * Convert an Array-like object to a real Array.
 */
export function toArray(list, start = 0) {
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) { // eslint-disable-line no-plusplus
    ret[i] = list[i + start];
  }
  return ret;
}

