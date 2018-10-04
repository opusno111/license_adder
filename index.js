#!/usr/bin/env node

const prompt = require('prompt');

const getHtmlLicenseHeader = require('./license-headers/getHtmlLicenseHeader.js');
const getCsharpLicenseHeader = require('./license-headers/getCsharpLicenseHeader.js');
const getSqlLicenseHeader = require('./license-headers/getSqlLicenseHeader.js');

const appendJsTsCsharpFiles = require('./utils/appendJsTsCsharpFiles.js');
const appendHtmlXmlXamlFiles = require('./utils/appendHtmlFiles.js');
const appendSqlFiles = require('./utils/appendSqlFiles.js');

const createAgplLicense = require('./create-license-txt-files/createAgplLicense.js');
const createApacheLicense = require('./create-license-txt-files/createApacheLicense.js');
const createMitLicense = require('./create-license-txt-files/createMitLicense.js');

prompt.start()

let licenseType = '';
let briefDescription = '';
let firstname = '';
let lastname = '';

let htmlHeaderLicenseText = '';
let cSharpHeaderLicenseText = '';
let sqlHeaderLicenseText = '';

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    licenseType = result.licenseType;
    briefDescription = result.briefDescription;
    firstname = result.firstname;
    lastname = result.lastname;

    // Create header for all the different file type
    // Headers for .html .xml .xaml .config
    htmlHeaderLicenseText = getHtmlLicenseHeader(licenseType, briefDescription, firstname, lastname);
    // Headers for .cs .ts .js .css .scss .sass
    cSharpHeaderLicenseText = getCsharpLicenseHeader(licenseType, briefDescription, firstname, lastname);
    // Headers for .sql
    sqlHeaderLicenseText = getSqlLicenseHeader(licenseType, briefDescription, firstname, lastname);

    // Append headers created above to appropiate file types
    appendJsTsCsharpFiles(cSharpHeaderLicenseText);
    appendHtmlXmlXamlFiles(htmlHeaderLicenseText);
    appendSqlFiles(sqlHeaderLicenseText);

    // Create full license text file in directory where command is run
    // Can't find a full length version of MIT license so I assume what is added to each file is enough?
    switch (licenseType){
        case 'agpl':
            createAgplLicense();
        case 'apache':
            createApacheLicense();
        case 'mit':
            createMitLicense();
        default: return;
    }
});







