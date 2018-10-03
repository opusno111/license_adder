#!/usr/bin/env node

const find = require('find');
const removeNodeModules = require('./util/removeNodeModules.js');

const appendFiles = (licenseHeader) => {
    find.file(/\.js$/, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseHeader, (err) => {
                console.log(err);
            })
        });
    })

}

module.exports = function appendJsFiles(licenseHeader) {
    return appendFiles(licenseHeader);
}