#!/usr/bin/env node

const prompt = require('prompt');
const program = require('commander');
const getJsLicenseHeader = require('./licenses/getJsLicenseHeader.js');

prompt.start()

let licenseType = '';
let briefDescription = '';
let firstname = '';
let lastname = '';

let jsHJeaderLicenseText = '';
let cSharpHJeaderLicenseText = '';

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    licenseType = result.licenseType;
    briefDescription = result.briefDescription;
    firstname = result.firstname;
    lastname = result.lastname;
    console.info(licenseType);
    console.info(briefDescription);
    console.info(firstname);
    console.info(lastname);

    jsHJeaderLicenseText = getJsLicenseHeader(licenseType, briefDescription, firstname, lastname);
    cSharpHJeaderLicenseText = getJsLicenseHeader(licenseType, briefDescription, firstname, lastname);
    
    console.info(jsHJeaderLicenseText);
    console.info(cSharpHJeaderLicenseText);
});

// const licenseType = alert('Enter license type ...');
// const briefDescription = alert('Enter brief description of app ...');
// const firstname = alert('Enter first name ...');
// const lastname = alert('Enter last name ...');




