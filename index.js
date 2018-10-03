#!/usr/bin/env node

const { prompt } = require('inquirer');
const program = require('commander');

const { getJsLicense } = require('./licenses/getJsLicense.js');

program
    .version('2.15.0')
    .description('Add license header to all file types in solution.');

// Craft questions to users
const questions = [
    {
        type: 'input',
        name: 'licenseType',
        message: 'Enter license type ...'
    },
    {
        type: 'input',
        name: 'briefDescription',
        message: 'Enter brief description of app ...'
    },
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter firstname ...'
    },
    {
        type: 'input',
        name: 'surname',
        message: 'Enter surname ...'
    },
]

program
    .command('getJsLicense')
    .alias('a')
    .description('Add License header to .js files')
    .action(() => {
        prompt(questions).then(answers =>
        licenseJs = getJsLicense(answers),
         console.info(licenseJs)
        );
    });



