const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        "Android 4.1",
      "iOS 7.1",
      "Chrome > 31",
      "ff > 31",
      "ie >= 8"
]
    }),
    require('postcss-pxtorem')({ // 把px单位换算成rem单位
      rootValue: 75, // 换算的基数(设计图750的根字体为75)
      selectorBlackList: ['.van'], // 忽略转换正则匹配项
      propList: ['*']
    })
  ]
}
