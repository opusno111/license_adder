#!/usr/bin/env node

const prompt = require('prompt');
const fs = require('fs-extra');

const getHtmlLicenseHeader = require('./license-headers/getHtmlLicenseHeader.js');
const getCsharpLicenseHeader = require('./license-headers/getCsharpLicenseHeader.js');
const getSqlLicenseHeader = require('./license-headers/getSqlLicenseHeader.js');

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

    htmlHeaderLicenseText = getHtmlLicenseHeader(licenseType, briefDescription, firstname, lastname);
    cSharpHeaderLicenseText = getCsharpLicenseHeader(licenseType, briefDescription, firstname, lastname);
    sqlHeaderLicenseText = getSqlLicenseHeader(licenseType, briefDescription, firstname, lastname);

    appendJsTsCsharpFiles(cSharpHeaderLicenseText);
    appendHtmlXmlXamlFiles(htmlHeaderLicenseText);
    appendSqlFiles(sqlHeaderLicenseText);

    switch (licenseType){
        case 'agpl':
            fs.copy('/license-headers/AGPL3', process.cwd())
            .then(() => console.info('Success file copy!'))
            .catch(err => console.error(err))
        default: return agpl(firstname, lastname, briefDescription);
    }
});







