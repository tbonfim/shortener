const crypto = require('crypto');
const options = {secret : 'APPLE_TEST_PK', algorithm : 'aes-128-cbc'};

exports.encrypt = (url) => {
  const encrypt = crypto.createCipher(options.algorithm, options.secret);
  let cipher = encrypt.update(url, 'utf8', 'hex');
  cipher += encrypt.final('hex');
  return cipher;
};

exports.decrypt = (cipher) => {  
  const decrypt = crypto.createDecipher(options.algorithm, options.secret);
  let url = decrypt.update(cipher, 'hex', 'utf8');
  return( url + decrypt.final('utf8'));
};
