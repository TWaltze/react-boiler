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
	entry: {
		app: ['./index.js'],
		vendor: ['react']
	},
	output: {
		filename: '[name].bundle.js',
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
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					'less-loader',
				],
				include: PATHS.app
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
	]
};

function customizer(objValue, srcValue) {
	if (_.isArray(objValue)) {
		return srcValue.concat(objValue);
	}
}

let config = null;
if (isProduction) {
	config = _.mergeWith(sharedConfig, webpackProd, customizer);
} else {
	config = _.mergeWith(sharedConfig, webpackDev, customizer);
}

module.exports = config;
