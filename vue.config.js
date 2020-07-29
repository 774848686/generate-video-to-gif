const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: process.env.outputDir, // 打包生成目录
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ['./src/icons']
      });
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
  },
  configureWebpack:{
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'static'), to: path.resolve(__dirname, 'dist', 'static') },
        ],
      })
  ],
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://192.168.0.104:18800/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
}
}