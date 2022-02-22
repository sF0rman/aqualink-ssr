import path from "path";
import { env } from "process";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  name: "server",
  target: "node",
  mode: env.production ? "production" : "development",
  devtool: env.production ? false : "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: ["regenerator-runtime/runtime.js", "./index.ts"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    publicPath: "./",
  },
  plugins: [new MiniCssExtractPlugin()],
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
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { emit: false } },
          { loader: "css-loader", options: { url: false } },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "public/images/[hash][ext][query]",
        },
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
