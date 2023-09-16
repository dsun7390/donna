const axios = require('axios')
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.BASE_URL,
  devServer: {
    proxy: process.env.VUE_APP_SERVER,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
}

// The proxy address in vue.config.js is automatically used locally. BaseUrl is not required. Otherwise the agent will fail
if (process.env.VUE_APP_ENV !== 'development') {
  axios.defaults.baseURL = process.env.VUE_APP_SERVER
  axios.defaults.url = process.env.VUE_APP_WEBSITE
}

// const webpack = require('webpack')
// module.exports = {
//   chainWebpack:config=>{
//     config.plugin('provide').use(webpack.ProvidePlugin),[{$:'jquery',jQuery:'jquery',jquery:'jquery','window.jquery':'jquery'}]
//   }
// }