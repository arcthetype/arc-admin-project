const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/global/_variable.scss'),
      ],
    })
}

module.exports = {
  publicPath: './',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://114.67.66.81:8081',
  //       changeOrigin: true
  //     }
  //   }
  // },
  productionSourceMap: false,
  chainWebpack: config => {
    // 处理svg vue-svg-loader也可以
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["./src/assets/icons"]
      });
    // 自动化导入
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
  }
}