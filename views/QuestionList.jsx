const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionList({ title, card }) {
  return (
    <Layout title={title}>
      <h1>Nigthawk Trivia</h1>
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
            <button cardid={card.id} type="submit" className="btn btn-primary">Submit your guess</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
