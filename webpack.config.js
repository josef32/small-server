const path = require('path');

module.exports = {
    context: __dirname + "/client",
    entry: './app.js',
    output: {
        filename: "[name].js",
        path: __dirname + "/public/js",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './client'),
        modulesDirectories: ['node_modules']
    },
    publicPath: './public',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }]
    }
};
