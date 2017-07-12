const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, 'frontend/components/index.js'),
	resolve: {
		alias: {
			Frontend: path.resolve(__dirname, 'frontend/'),
			API: path.resolve(__dirname, 'api/')
		}
	},
	output: {
		path : path.resolve(__dirname, 'frontend/static'),
		publicPath: '/',
		filename : 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2016', 'react', 'stage-2']
					}
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: [
					path.join(__dirname, "node_modules/bootstrap-sass/assets/stylesheets"),
					path.join(__dirname, "frontend/styles")
				]
			}
		],
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	watch: false
};