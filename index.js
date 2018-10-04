#!/usr/bin/env node

const prompt = require('prompt');
const getHtmlLicenseHeader = require('./licenses/getHtmlLicenseHeader.js');
const getCsharpLicenseHeader = require('./licenses/getCsharpLicenseHeader.js');
const appendJsTsCsharpFiles = require('./utils/appendJsTsCsharpFiles.js');
const appendHtmlXmlXamlFiles = require('./utils/appendHtmlFiles.js');
const appendSqlFiles = require('./utils/appendSqlFiles.js');

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
    
    console.info(licenseType);
    console.info(briefDescription);
    console.info(firstname);
    console.info(lastname);

    htmlHeaderLicenseText = getHtmlLicenseHeader(licenseType, briefDescription, firstname, lastname);
    cSharpHeaderLicenseText = getCsharpLicenseHeader(licenseType, briefDescription, firstname, lastname);
    sqlHeaderLicenseText = getSqlLicenseHeader(licenseType, briefDescription, firstname, lastname);

    appendJsTsCsharpFiles(cSharpHeaderLicenseText);
    appendHtmlXmlXamlFiles(htmlHeaderLicenseText);
    appendSqlFiles(sqlHeaderLicenseText);
});





