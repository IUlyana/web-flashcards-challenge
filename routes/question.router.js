const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Card } = require('../db/models');
const QuestionList = require('../views/QuestionList');

router.get('/:id', async (req, res) => {
  const card = await Card.findOne({ where: { id: req.params.id }, raw: true });
  console.log(card);
  const home = React.createElement(QuestionList, { title: 'Question', card });
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
