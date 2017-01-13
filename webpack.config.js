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
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {
		filename: 'bundle.js',
		path: PATHS.build,
		publicPath: '/'
	},
	context: PATHS.app,
	devtool: 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		hot: true,
		contentBase: PATHS.build,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader',
				],
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
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin([PATHS.build], {
			"verbose": true
		})
	],
};