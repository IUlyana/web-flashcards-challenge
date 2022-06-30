const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../views/Home');

indexRouter.get('/', (req, res) => {
  const home = React.createElement(Home, { title: 'Homepage' });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

module.exports = indexRouter;
