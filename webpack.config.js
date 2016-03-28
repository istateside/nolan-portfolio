const autoprefixer = require('autoprefixer');
const variables    = require('postcss-simple-vars');
const nested       = require('postcss-nested');
const importer     = require('postcss-import');

module.exports = {
  entry: './src/entry.js',
  output: {
    publicPath: '/build',
    filename: 'bundle.js',
  },
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
        test: /\.css$/,
        include: /src\/css/,
        loader: "style-loader!css-loader!postcss-loader!"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015'
        ],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  postcss: function(webpack) {
      return [
        autoprefixer({ browsers: ["last 2 versions"]}),
        nested,
        variables,
        importer({addDependencyTo: webpack})];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
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
