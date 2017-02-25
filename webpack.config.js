const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const source = path.resolve(__dirname, 'src');

module.exports = {
	entry: path.resolve(source, 'js/snackbar.js'),
	output: {
		filename: 'snackbar.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'snacker',
		libraryTarget: 'umd',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				loaders: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader',
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('snackbar.css'),
	],
};