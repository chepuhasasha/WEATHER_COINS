#!/usr/bin/env node

let { createWorker } = require('../src');

let worker = createWorker();
worker.start();