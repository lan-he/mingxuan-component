module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/base";`,
      },
    },
  },
  // 开发环境中使用的端口
  devServer: {
    port: 614,
  },
  // 取消生成map文件（map文件可以准确的输出是哪一行哪一列有错）
  productionSourceMap: false,
  // 开发环境和部署环境的路径
  publicPath: '/',
}
