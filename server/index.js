import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.dev.config.js';

const port = 3001;
const app = express();
const compiler = webpack(config);

// app.use(express.static('dist'));

app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use(express.static('dist'));

app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname,'../dist/index.html'));
  // res.render(path.join(__dirname,'../src/index.ejs'));
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
