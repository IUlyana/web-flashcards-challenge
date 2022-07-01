const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const QuestionList = require('../views/QuestionList');

router.get('/', (req, res) => {
  const home = React.createElement(QuestionList, { title: 'Homepage' });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

router.post('/', (req, res) => {

})

module.exports = router;
