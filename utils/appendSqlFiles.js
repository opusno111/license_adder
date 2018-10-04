#!/usr/bin/env node

const find = require('find');
const prepend = require('prepend-file');
const removeNodeModules = require('./removeNodeModules');

const appendFiles = (licenseHeader) => {
    find.file(/\.((sql))$/i, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseHeader, (err) => {
                console.log(err);
            })
        });
    })

}

module.exports = function appendSqlFiles(licenseHeader) {
    return appendFiles(licenseHeader);
}