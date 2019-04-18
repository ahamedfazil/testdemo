const path = require("path");
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { URL, targetPath } = require("./webpack.env.js");
// How to use environment variables:
// https://webpack.js.org/guides/environment-variables/
module.exports = env => {
  let environment = env || "test";
  environment = environment.ENV || "test";

  return webpackMerge(config(), {
    devtool: false,
    module: {
      // String replacements for TEST, QA, PROD builds:
      // https://www.npmjs.com/package/@clayne/string-replace-loader
      rules: [
        {
          test: /\.(js|ts|tsx)$/i,
          use: [
            {
              loader: "string-replace-loader",
              options: {
                multiple: [
                  {
                    search: "http://UK-MP19U5FM:8080",
                    // search: "http://DESKTOP-Q9SQHGE:8080",
                    // search: "https://sites.kpmg.co.uk/apps/katsdev",
                    replace: URL[environment].siteUrl
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].bundle.css"
      }),
      new UglifyJSPlugin({
        sourceMap: true,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: environment,
        DEBUG: false
      })
    ],
    output: {
      filename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist" + targetPath),
      publicPath: URL[environment].siteUrl + targetPath
    }
  });
};
