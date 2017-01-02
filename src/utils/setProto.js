/**
 * setProto function for non ES2015 version of Custom Elements registration
 * @param {Object} A
 * @param {Object} B
 */
export default function setProto(A, B) {
  A.prototype = Object.create( // eslint-disable-line no-param-reassign
    B.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: A
      }
    }
  );
}
