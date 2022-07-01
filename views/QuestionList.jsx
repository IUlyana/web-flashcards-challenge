const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionList({ title }) {
  return (
    <Layout title={title}>
      <h1>Здесь будет тема</h1>
      <div>
        Здесь будет вопрос
      </div>
      <form>
        <div className="row">
          <div className="col-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter your guess</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <button type="submit" className="btn btn-primary">Submit your guess</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
