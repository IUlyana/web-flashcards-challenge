const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Card, Deck } = require('../db/models');
const QuestionList = require('../views/QuestionList');

router.get('/:idq/:id', async (req, res) => {
  const deck = await Deck.findOne({ where: { id: req.params.idq }, raw: true });
  const card = await Card.findOne({ where: { id: req.params.id }, raw: true });
  const home = React.createElement(QuestionList, { title: 'Question', card, deck });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

// router.post('/:id', async (req, res) => {
//   const questionName = await Card.findOne({ where: { id: req.params.id } });
//   // console.log(questionName);
//   await questionName.increment('id', { by: 1 });
//   const clearQuest = questionName.question;
//   res.json({ clearQuest });
// });

// router.post('/', async (req, res) => {
//   try {

//   } catch {

//   }
// });


module.exports = router;
