#!/usr/bin/env node

const prompt = require('inquirer');
const program = require('commander');

const getJsLicense = require('./licenses/getJsLicense.js');

const licenseType = alert('Enter license type ...');
const briefDescription = alert('Enter brief description of app ...');
const firstname = alert('Enter first name ...');
const lastname = alert('Enter last name ...');

const licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);

console.prompt(licenseText);



