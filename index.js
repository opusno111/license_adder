#!/usr/bin/env node

const prompt = require('prompt');
const program = require('commander');
const getJsLicense = require('./licenses/getJsLicense.js');

prompt.start()

const licenseType = '';
const briefDescription = '';
const firstname = '';
const lastname = '';

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    licenseType = result.licenseType;
    briefDescription = result.briefDescription;
    firstname = result.firstname;
    surname = result.surname;
    console.info(licenseType);
    console.info(briefDescription);
    console.info(firstname);
    console.info(lastname);
    
    const licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);
    
    console.info(licenseText);
});

// const licenseType = alert('Enter license type ...');
// const briefDescription = alert('Enter brief description of app ...');
// const firstname = alert('Enter first name ...');
// const lastname = alert('Enter last name ...');




