#!/usr/bin/env node

const prompt = require('inquirer');
const program = require('commander');

const getJsLicense = require('./licenses/getJsLicense.js');

const licenseType = prompt('Enter license type ...');
const briefDescription = prompt('Enter brief description of app ...');
const firstname = prompt('Enter first name ...');
const lastname = prompt('Enter last name ...');

const licenseText = getJsLicense(licenseType, briefDescription, firstname, lastname);

console.prompt(licenseText);



