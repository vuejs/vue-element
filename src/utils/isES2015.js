function isES2015() {
  if (typeof Symbol === 'undefined' || typeof Reflect === 'undefined') return false;

  return true;
}

export default isES2015();
