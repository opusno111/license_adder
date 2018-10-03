#!/usr/bin/env node

const prompt = require('prompt');
const program = require('commander');
const getJsLicense = require('./licenses/getJsLicense.js');

prompt.start()

prompt.get('licenseType', function (err, result)) {
    console.info(result);
}

// const licenseType = alert('Enter license type ...');
// const briefDescription = alert('Enter brief description of app ...');
// const firstname = alert('Enter first name ...');
// const lastname = alert('Enter last name ...');

// const licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);

console.info(licenseText);



