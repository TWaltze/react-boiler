const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
	app: resolve(__dirname, 'src'),
	build: resolve(__dirname, 'build')
}

module.exports = {
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
	devtool: 'eval-source-map',
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin([PATHS.build], {
			"verbose": true
		})
	],
};