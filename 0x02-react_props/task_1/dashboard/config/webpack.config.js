const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [ "@babel/preset-env" ]
            }
          }
        ]
      },
          
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets"
          }
        }
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html"
    })
  ]
};

