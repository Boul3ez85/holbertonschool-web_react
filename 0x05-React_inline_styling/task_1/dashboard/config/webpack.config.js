const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
	static: {
		directory: path.resolve(__dirname, 'dist'),
	},
	hot: true,
  },
  plugins: [
	  new CleanWebpackPlugin(),
	  new HtmlWebpackPlugin({
		  template: './dist/index.html',
		  title: 'Holberton Dashboard',
		  favicon: './dist/Favicon.ico'
    }),
  ],
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
	  },
	  {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	  },
	  {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
		loader: 'image-webpack-loader',
  	  },
	],
  },
};
