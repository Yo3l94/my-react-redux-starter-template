const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
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
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|gif|png|svg)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
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
