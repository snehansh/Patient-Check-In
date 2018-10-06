import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.dev.config.js';

const port = 3001;
const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.render('index');
});

app.use(express.static('dist'));

app.listen(port, function(err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }else {
    console.log("connected"); // eslint-disable-line no-console
  }
});
