const { resolve } = require('path');
const webpack = require('webpack');
const webpackDev = require('./webpack.config.dev');
const webpackProd = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const _ = require('lodash');

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

const PATHS = {
	app: resolve(__dirname, 'src'),
	build: resolve(__dirname, 'build')
}

const sharedConfig = {
	context: PATHS.app,
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./index.js'
	],
	output: {
		filename: 'bundle.js',
		path: PATHS.build,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: [{
					loader: 'eslint-loader',
					options: {
						// failOnError: true
					}
				}],
				include: PATHS.app
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: PATHS.app
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { modules: true } },
					'postcss-loader',
				],
				include: PATHS.app
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};

let config = null;
if (isProduction) {
	config = _.merge(sharedConfig, webpackProd);
} else {
	config = _.merge(sharedConfig, webpackDev);
}

module.exports = config;
