var cryto = require('crypto');
var tokenSecret = cryto.randomBytes(64).toString('hex');
console.log(tokenSecret);
