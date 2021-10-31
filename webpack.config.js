const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:'development',devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
        profile : './src/profile.js'
    },
    devServer : {
		contentBase : '/dist'
	},
    output : {
        filename: '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules:[
            {test:/\.css$/ , use:['style-loader','css-loader'] } 
            ,{test:/\.tsx?/ , use:['ts-loader']}
        ]
    },
    resolve : {
        extensions : ['.tsx','.ts','.js','.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({})
        ,new CleanWebpackPlugin()
    ]
}