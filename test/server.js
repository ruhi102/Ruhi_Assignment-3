const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config");

const compiler = webpack(webpackConfig);

const app = express();

app.use(devMiddleware(compiler));

app.listen(3000, () => console.log("Express listening on port 3000"));
