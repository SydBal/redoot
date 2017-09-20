const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
	resolve: {
		alias: {
			Frontend: path.resolve(__dirname, `frontend/`),
			Styles: path.resolve(__dirname, `frontend/styles`),
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
			{
				test: /\.js$/,
				use: [{
					loader: `babel-loader`,
					options: {
						presets: [`es2016`, `react`, `stage-2`]
					}
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{ loader: `style-loader`, options: { sourceMap: true }}, 
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: (loader) => [
								require('postcss-import')(),
								require('postcss-custom-properties')(),
								require('autoprefixer')(),
								require('csswring')(),
								require('postcss-nested')()
							]
						}
					}
				],
				include: [
					path.join(__dirname, `node_modules/bootstrap-sass/assets/stylesheets`),
					path.join(__dirname, `frontend/styles`)
				]
			}
		],
	},
	stats: {
		colors: true
	}
};