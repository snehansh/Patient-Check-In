import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.dev.config.js';
import serverRender from './serverRender';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.use(express.static('dist'));

app.listen(port, function(err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }else {
    console.log("connected"); // eslint-disable-line no-console
  }
});
