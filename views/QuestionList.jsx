const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionList({ title, card, deck}) {
  return (
    <Layout title={title}>
      <h1>{deck.title}</h1>
      <div className="questionChange">
        <div key={card.id} >
          {card.question}
        </div>
      </div>
      <form className="formQuestion" method="post">
        <div className="row">
          <div className="col-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter your guess</label>
            <input type="text" name="answer" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            <button id={card.deck_id} cardid={card.id} type="submit" className="btn btn-primary">Submit your guess</button>

          </div>
        </div>
      </form>
    </Layout>
  );
};
