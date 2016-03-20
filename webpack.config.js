const autoprefixer = require('autoprefixer');

module.exports = {
  entry: getEntrySources(['./src/entry.js']),
  output: {
    publicPath: 'http://localhost:8080',
    filename: 'build/bundle.js',
  },
  devtool: "eval",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map',
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015'
        ],
      },
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src', 'node_modules'],
  }
}

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}
