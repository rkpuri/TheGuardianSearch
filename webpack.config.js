const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
				test: /\.less$/,
				exclude: /(node_modules)/,
				 use: ["style-loader", "css-loader", "less-loader"],
			}
    ],
  },
};