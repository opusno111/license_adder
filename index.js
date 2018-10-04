#!/usr/bin/env node

const prompt = require('prompt');
const getHtmlLicenseHeader = require('./licenses/getHtmlLicenseHeader.js');
const getCsharpLicenseHeader = require('./licenses/getCsharpLicenseHeader.js');
const appendJsTsCsharpFiles = require('./utils/appendJsTsCsharpFiles.js');
const appendHtmlXmlXamlFiles = require('./utils/appendHtmlFiles.js');

prompt.start()

let licenseType = '';
let briefDescription = '';
let firstname = '';
let lastname = '';

let jsHeaderLicenseText = '';
let cSharpHeaderLicenseText = '';

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    licenseType = result.licenseType;
    briefDescription = result.briefDescription;
    firstname = result.firstname;
    lastname = result.lastname;
    console.info(licenseType);
    console.info(briefDescription);
    console.info(firstname);
    console.info(lastname);

    htmlHeaderLicenseText = getHtmlLicenseHeader(licenseType, briefDescription, firstname, lastname);
    cSharpHeaderLicenseText = getCsharpLicenseHeader(licenseType, briefDescription, firstname, lastname);
    
    console.info(htmlHeaderLicenseText);
    console.info(cSharpHeaderLicenseText);

    appendJsTsCsharpFiles(cSharpHeaderLicenseText);
    appendHtmlXmlXamlFiles(htmlHeaderLicenseText);
});





