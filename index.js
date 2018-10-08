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

prompt.get(['licenseType', 'briefDescription', 'firstname', 'lastname'], function (err, result) {
    const licenseType = result.licenseType;
    const briefDescription = result.briefDescription;
    const firstname = result.firstname;
    const lastname = result.lastname;

    if (!licenseType || !briefDescription || !firstname) {
        console.info(`License type, brief description of App and firstname are required to create header!`)
        return;
    }
    // Create header for all the different file type
    // Headers for .html .xml .xaml .config
    const htmlHeaderLicenseText = getHtmlLicenseHeader(licenseType, briefDescription, firstname, lastname);
    // Headers for .cs .ts .js .css .scss .sass
    const cSharpHeaderLicenseText = getCsharpLicenseHeader(licenseType, briefDescription, firstname, lastname);
    // Headers for .sql
    const sqlHeaderLicenseText = getSqlLicenseHeader(licenseType, briefDescription, firstname, lastname);

    // Append headers created above to appropiate file types
    appendJsTsCsharpFiles(cSharpHeaderLicenseText);
    appendHtmlXmlXamlFiles(htmlHeaderLicenseText);
    appendSqlFiles(sqlHeaderLicenseText);

    // Create full license text file in directory where command is run
    switch (licenseType){
        case 'agpl':
            return createAgplLicense();
        case 'apache':
            return createApacheLicense();
        case 'mit':
            return createMitLicense();
        default: return;
    }
});







