const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['@babel/preset-env']
				  }
				}
			  },
			{
				test: /\.scss$/,
				use: [
                    MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css"
		})
	],
};