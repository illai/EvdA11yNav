const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'examples/src/index.js'),
  },
  output: {
    filename: 'scripts/app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-eval-source-map',
    devServer: {
		port: 3001,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    },
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    {
		test:/\.s?css$/,
		use: [
			'style-loader', 
			'css-loader',
			'sass-loader'
		]
    }],
  },
  plugins: [ 
    new CleanWebpackPlugin(['dist']), 
    new HtmlWebpackPlugin({
		template: path.join(__dirname, "examples/src/index.html"),
		filename: "./index.html"
	}) 
  ],
  resolve: {
	extensions: [".js", ".jsx"]
},
};