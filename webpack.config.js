const path = require(`path`);
const webpack = require(`webpack`);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	resolve: {
		alias: {
			Frontend: path.resolve(__dirname, `frontend/`),
			Redux: path.resolve(__dirname, `frontend/redux/`)
		}
	},
	devtool: `source-map`,
	entry: path.join(__dirname, `frontend/components/index.js`),
	output: {
		path : path.resolve(__dirname, `frontend/build`),
		publicPath: `/`,
		filename : `app.js`
	},
	module: {
		rules: [

			//React Bundler
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: `babel-loader`,
					options: {
						presets: [`es2016`, `react`, `stage-2`]
					}
				}]
			},

			//SASS Bundler, including Bootstrap 4
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
							importLoaders: 1
						}
					},{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								require('autoprefixer')(),
								require('csswring')({removeallcomments: true}),
								require('cssnano')({discardComments: {removeAll: true}}),
								require('postcss-cssnext')({warnForDuplicates: false}),
								require('postcss-custom-properties')(),
								require('postcss-flexbugs-fixes'),
								require('postcss-import')(),
								require('postcss-nested')
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