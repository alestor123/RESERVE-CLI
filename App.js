#!/usr/bin/env node

var path = require('path'),
fs = require('fs'),
tmp = require('tmp'),
conf = require('conf'),
options = require('minimist'),
key = options.k || options.key,
name = options.name || options.n ,
npm = require('npm-registry-client');