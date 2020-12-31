#!/usr/bin/env node

var path = require('path'),
fs = require('fs'),
{ exec } = require('child_process'),
tmp = require('tmp'),
options = require('minimist')(process.argv.slice(2)),
name = options.name || options.n;

// readme 
var readme = `# ${name}

> WIP`,

pckW = {
        "name": name,
        "version": "0.0.0",
        "description": "Reserved [WIP]",
      
}
tmp.dir((err, path) => {
if(err) throw err
fs.writeFile(path + "/package.json",JSON.stringify(pckW),(err) => {if(err) throw err})
fs.writeFile(path + "/README.md",readme,(err) => {if(err) throw err})
exec(`npm publish ${path}`,(err,stdout) => { if(err) throw err
console.log(stdout)})})
    