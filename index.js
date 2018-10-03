#!/usr/bin/env node

const program = require('commander');



const getLicense = require('./licenses/getLicense.js');

const conArgv = ['mit', 'Anonymous', 'wibble description'];

const name = '';

const briefDescription = '';

let argv = process
    .argv
    .slice(3);

if (argv.length === 0) {
    argv = conArgv;
} else {

}

const license = getLicense(conArgv[0], conArgv[1], conArgv[2]);

console.info(license);