const { resolve } = require('path');
const webpack = require('webpack');
const webpackDev = require('./webpack.config.dev');
const webpackProd = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');

const isProduction = process.env.NODE_ENV === 'production';

const PATHS = {
	app: resolve(__dirname, '../src'),
	build: resolve(__dirname, '../build'),
	server: resolve(__dirname, '../server')
};

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
					'less-loader'
				],
				include: PATHS.app
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							// Source map generates incorrect url
							// http://stackoverflow.com/a/41651902
							// https://github.com/webpack/css-loader/issues/280
							// sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000'
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(PATHS.server, 'index.template.html')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		})
	]
};

function mergeArrays(objValue, srcValue) {
	if (_.isArray(objValue)) {
		return srcValue.concat(objValue);
	}
}

let config = null;
if (isProduction) {
	config = _.mergeWith(sharedConfig, webpackProd, mergeArrays);
} else {
	config = _.mergeWith(sharedConfig, webpackDev, mergeArrays);
}

module.exports = config;
