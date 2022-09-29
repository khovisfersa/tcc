module.exports = {
  publicPath: process.env.PUBLIC_URL || "/", 
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
  devServer: {
    proxy: 'http://localhost:3333'
  }
}