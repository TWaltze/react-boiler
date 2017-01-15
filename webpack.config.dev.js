const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
	app: resolve(__dirname, 'src'),
	build: resolve(__dirname, 'build')
}

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client'
	],
	devtool: 'eval-source-map',
	module: {
		rules: [],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
