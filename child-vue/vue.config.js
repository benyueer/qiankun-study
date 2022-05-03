module.exports = {
  configureWebpack: {
    output: {
      library: 'singleSpaVue',
      libraryTarget: 'umd',
    },
    devServer: {
      port: 10000
    }
  }
}