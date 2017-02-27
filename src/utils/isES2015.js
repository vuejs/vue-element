function isES2015() {
  if (typeof Symbol === 'undefined' || typeof Reflect === 'undefined') return false;
  try {
    eval('class Foo {}'); // eslint-disable-line no-eval
  } catch (e) { return false; }

  return true;
}

export default isES2015();
