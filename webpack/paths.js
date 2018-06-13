// @flow
const { resolve } = require('path');

const PATHS = {
	app: resolve(__dirname, '../src'),
	build: resolve(__dirname, '../build'),
	server: resolve(__dirname, '../server'),
	node: resolve(__dirname, '../node_modules')
};

module.exports = PATHS;
