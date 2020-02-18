const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit:75
})

module.exports = {
  runtimeCompiler:true,
  lintOnSave:false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
},
}