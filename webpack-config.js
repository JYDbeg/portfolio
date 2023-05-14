module.exports = {
    devtool: 'source-map',
    entry: 'index.jsx', 
    output: {
        filename: 'bundle.js' // �o�͂���t�@�C��
    },
    mode: "development",
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            }
        ]
    }
}