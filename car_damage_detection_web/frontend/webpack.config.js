const path = require("path");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.sol$/,
                use: "truffle-solidity-loader",
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            "process.env": {
                NODE_ENV: JSON.stringify("production"),

            },
        }),
        new NodePolyfillPlugin()
    ],
    // resolve: {
    //     fallback: {
    //         crypto: require.resolve('crypto-browserify'),
    //         os: require.resolve('os-browserify/browser'),
    //         stream: require.resolve('stream-browserify'),
    //         assert: require.resolve('assert/'),
    //         vm: require.resolve("vm-browserify"),
    //         path: require.resolve("path-browserify"),
    //         url: require.resolve("url/")
    //     }
    // }
};