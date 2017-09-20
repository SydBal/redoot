const path = require(`path`);
const webpack = require(`webpack`);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	resolve: {
		alias: {
			Frontend: path.resolve(__dirname, `frontend/`),
			API: path.resolve(__dirname, `api/`)
		}
	},
	devtool: `source-map`,
	entry: path.join(__dirname, `frontend/components/index.js`),
	output: {
		path : path.resolve(__dirname, `frontend/static`),
		publicPath: `/`,
		filename : `app.js`
	},
	module: {
		rules: [

			//React Bundler
			{
				test: /\.js$/,
				use: [{
					loader: `babel-loader`,
					options: {
						presets: [`es2016`, `react`, `stage-2`]
					}
				}],
				include: [
					path.join(__dirname, `frontend`)
				]
			},

			//SASS Bundle, including Bootstrap 4
			{
				test: /\.(sass|scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback:{ 
						loader: `style-loader`,
						options: { sourceMap: true }
					},
					use: [{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2
						}
					},{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								require('cssnano')({discardComments: {removeAll: true}}),
								require('postcss-import')(),
								require('postcss-cssnext')(),
								require('postcss-custom-properties')(),
								require('postcss-nested'),
								require('postcss-flexbugs-fixes'),
								require('csswring')({removeallcomments: true})
							]
						}
					},{
						loader: 'sass-loader'
					}]
				}),
				include: [
					path.join(__dirname, `frontend/styles`)
				]
			}
		],
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
	],
	stats: {
		colors: true
	}
};