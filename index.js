#!/usr/bin/env node

const prompt = require('prompt');
const program = require('commander');
const getJsLicense = require('./licenses/getJsLicense.js');

prompt.start()

const licenseType = '';
const briefDescription = '';
const firstname = '';
const lastname = '';

prompt.get('Enter license type ...', function (err, result) {
    licenseType = result;
    console.info(licenseType);
});

prompt.get('Enter brief description of app ...', function (err, result) {
    briefDescription = result;
    console.info(briefDescription);
});

prompt.get('Enter first name ...', function (err, result) {
    firstname = result;
    console.info(firstname);
});

prompt.get('Enter last name ...', function (err, result) {
    lastname = result;
    console.info(lastname);
});

// const licenseType = alert('Enter license type ...');
// const briefDescription = alert('Enter brief description of app ...');
// const firstname = alert('Enter first name ...');
// const lastname = alert('Enter last name ...');

const licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);

console.info(licenseText);



