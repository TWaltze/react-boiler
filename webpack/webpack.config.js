const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackDev = require('./webpack.config.dev');
const webpackProd = require('./webpack.config.prod');
const paths = require('./paths');
const _ = require('lodash');

const isProduction = process.env.NODE_ENV === 'production';

const sharedConfig = {
	context: paths.app,
	resolve: {
		modules: [
			paths.app,
			paths.node
		],
		extensions: [ '.jsx', '.js', '.json' ]
	},
	entry: {
		app: ['./index.js'],
		vendor: ['react']
	},
	output: {
		filename: '[name].bundle.js',
		path: paths.build,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				use: [{
					loader: 'eslint-loader'
				}],
				include: paths.app
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: paths.app
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
				include: paths.app
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
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
			template: resolve(paths.server, 'index.template.html')
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
