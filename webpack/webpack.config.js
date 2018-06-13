// @flow
const { resolve } = require('path');
const webpackDev = require('./webpack.config.dev');
const webpackProd = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const paths = require('./paths');

const isProduction = process.env.NODE_ENV === 'production';

const sharedConfig = {
	context: paths.app,
	entry: { app: ['./index.js'] },
	output: {
		filename: '[name].bundle.js',
		path: paths.build,
		publicPath: '/'
	},
	resolve: { extensions: ['.js', '.jsx', '.json'] },
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				use: [{ loader: 'eslint-loader' }],
				include: paths.app
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: paths.app
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules: true }
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{ template: resolve(paths.server, 'index.template.html') }
		)
	]
};

let config = null;
if (isProduction) {
	config = merge(sharedConfig, webpackProd);
} else {
	config = merge(sharedConfig, webpackDev);
}

module.exports = config;
