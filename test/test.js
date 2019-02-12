const assert = require('assert');
const crypt = require('../models/crypt');

describe('Crypt classe', () => {
  describe('Crypt path',() => {
    it('Encripted input must be the same', function() {
      const urlSample = 'apple.com';
      const crypted = crypt.encrypt(urlSample);
      const decrypted = crypt.decrypt(crypted);
      assert.equal(urlSample, decrypted);
    });
  });
});
