import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.jsx',

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['./src/lib/', './node_modules/']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

  devServer: {
    port: 8080,
    host: 'localhost',
    publicPath: '/',
    open: true
  }
};
