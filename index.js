#!/usr/bin/env node

const helloWorld = "hello world";

const getLicense = require('./licenses/getLicense.js');

const conArgv = ['mit', 'Anonymous'];

let argv = process
    .argv
    .slice(2);

if (argv.length === 0) {
    argv = conArgv;
}

const wibbleString = getLicense(conArgv[0]);

console.log("hello world");