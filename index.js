const getLicense = require('./licenses/getLicense.js');

const conArgv = ['string'];


const wibbleString = getLicense(conArgv[0]);

console.log(wibbleString);