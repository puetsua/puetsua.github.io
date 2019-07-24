
module.exports = {
  devServer: {
    proxy: {
      '^/oembed': {
        target: 'https://backend.deviantart.com',
        ws: true,
        changeOrigin: true
      },
    }
  }
}