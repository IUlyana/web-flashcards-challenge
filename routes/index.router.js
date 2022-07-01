const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../views/Home');
const { Deck } = require('../db/models');


indexRouter.get('/', async (req, res) => {
  const decks = await Deck.findAll();
  const home = React.createElement(Home, { title: 'Homepage', decks });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

module.exports = indexRouter;
