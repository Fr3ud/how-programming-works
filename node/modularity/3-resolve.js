'use strict';

const exp = require('./1-export.js'); // !important: path + extension
const expPath = require.resolve('./1-export.js');
const expModule = require.cache[expPath];
console.log({ exp, expPath, expModule });

const events = require('events');
const eventsPath = require.resolve('events');
const eventsModule = require.cache[eventsPath];
console.log({ events, eventsPath, eventsModule });
