
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= Object.assign({},base, {
    mode:'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
})