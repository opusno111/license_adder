#!/usr/bin/env node

const prompt = require('prompt');
const program = require('commander');
const getJsLicense = require('./licenses/getJsLicense.js');

prompt.start()

let licenseType = '';
let briefDescription = '';
let firstname = '';
let lastname = '';

let licenseText = '';

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    licenseType = result.licenseType;
    briefDescription = result.briefDescription;
    firstname = result.firstname;
    lastname = result.lastname;
    console.info(licenseType);
    console.info(briefDescription);
    console.info(firstname);
    console.info(lastname);

    licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);
    
    console.info(licenseText);
});

// const licenseType = alert('Enter license type ...');
// const briefDescription = alert('Enter brief description of app ...');
// const firstname = alert('Enter first name ...');
// const lastname = alert('Enter last name ...');




