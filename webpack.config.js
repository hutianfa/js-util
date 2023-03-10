const path = require('path')
module.exports = {
    // 入口文件
    entry: './index.js',
    // 输入配置
    output: {
        path: path.resolve(__dirname, 'build'),
		//生成文件名称
        filename: 'jsUtilsPlugin.js',
		// 设置对外暴露对象的全局名称
		library: "jsUtilsPlugin",
		libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
                }
            }
        ]
    }
    
}