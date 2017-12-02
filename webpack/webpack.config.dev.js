const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = {
	entry: {
		app: [
			'react-hot-loader/patch',
			paths.app
		]
	},
	devtool: 'eval-source-map',
	module: {
		rules: [],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	],
	devServer: {
		contentBase: paths.build,
		historyApiFallback: true,
		hot: true,
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: false
		}
	}
};
