import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { env } from "process";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: "client",
  target: "web",
  mode: env.production ? "production" : "development",
  devtool: env.production ? false : "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: "./client/App.tsx",
  cache: false,
  output: {
    path: path.resolve(__dirname, "build", "public"),
    filename: env.production ? "main.[chunkhash].js" : "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
