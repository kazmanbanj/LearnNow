module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
  ]
}
