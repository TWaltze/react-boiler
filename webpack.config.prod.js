const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
	app: resolve(__dirname, 'src'),
	build: resolve(__dirname, 'build')
}

module.exports = {
	devtool: 'cheap-module-source-map',
	module: {
		rules: [],
	},
	plugins: [
		new CleanWebpackPlugin([PATHS.build], {
			"verbose": true
		})
	]
};
