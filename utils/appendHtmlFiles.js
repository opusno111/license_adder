#!/usr/bin/env node

const find = require('find');
const prepend = require('prepend-file');
const removeNodeModules = require('./removeNodeModules');

const appendHtmlFiles = (licenseHeader) => {
    find.file(/\.((html)|(xml)|(xaml)|(config))$/i, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseHeader, (err) => {
                if(err) {
                    console.log(`ERROR adding header to: ${fileName}, Error:  ${err}`);
                } else {
                    console.info('SUCCESS Header added to: ', fileName);
                }
            })
        });
    })

}

module.exports = appendHtmlFiles;