#!/usr/bin/env node

var path = require('path'),
fs = require('fs'),
tmp = require('tmp'),
conf = require('conf'),
options = require('minimist'),
npm = require('npm-registry-client');