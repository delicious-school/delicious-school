
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import cookieParser from 'cookie-parser';
import apiRouter from './api/index';

const db = require('./db/connect');

const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(express.static('./public'));

app.use('/api', apiRouter);

if (require.main === module) {
  app.listen(3000, function () {
    db.connect('production', (err) => {
      if (err) return console.error('db connection failed');
      console.log('Listening on 3000');
    });
  });
}
export default app;

