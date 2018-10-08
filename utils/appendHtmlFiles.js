#!/usr/bin/env node

const find = require('find');
const prepend = require('prepend-file');
const removeNodeModules = require('./removeNodeModules');

const appendHtmlFiles = (licenseHeader) => {
    find.file(/\.((html)|(xml)|(xaml)|(config))$/i, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseHeader, (err) => {
                console.log(err);
            })
        });
    })

}

module.exports = appendHtmlFiles;