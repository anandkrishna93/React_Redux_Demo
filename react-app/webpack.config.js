const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    devServer: {
        disableHostCheck: true,
        inline: true,
        port: 3003,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(png|gif|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    externals: {
        config: JSON.stringify({
            basePath: '/react-ui/'
        })
    }
}