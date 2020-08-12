const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				// test: /\.(js|jsx)$/,
				test: /\.tsx?$/,
				exclude: /node_modules/,
				// use: {
				// 	loader: "babel-loader",
				// },
				use: "ts-loader",
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
