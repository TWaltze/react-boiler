const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack/webpack.config');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
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
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
	// console.log(path.resolve(config.output.path));
	// console.log(path.join(`${__dirname}/../`));

	res.sendFile(path.resolve(config.output.path), 'index.html');
});

app.listen(3000, (err) => {
	if (err) {
		console.error(err);

		return;
	}

	console.log('Listening at http://localhost:3000/');
});
