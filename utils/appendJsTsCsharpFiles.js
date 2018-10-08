#!/usr/bin/env node

const find = require('find');
const prepend = require('prepend-file');
const removeNodeModules = require('./removeNodeModules');

const appendJsTsCsharpFiles = (licenseHeader) => {
    find.file(/\.((ts)|(js)|(cs)|(css)|(scss)|(sass))$/i, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseHeader, (err) => {
                console.log(err);
            })
        });
    });
}

module.exports = appendJsTsCsharpFiles;