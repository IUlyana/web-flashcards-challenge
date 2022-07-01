const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <h1>Flashcards Decks</h1>
      <div className="grid">
        {
          themes.map((theme) => {
             <div id={theme.id} className="g-col-6">
              <a href={`/question/${theme.id}`}> {theme.(name)} </a>
             </div>
          })
        }
        {/* <div className="g-col-6">Название раздела 1</div>
        <div className="g-col-6">Название раздела 2</div>
        <div className="g-col-6">Название раздела 3</div>
        <div className="g-col-6">Название раздела 4</div> */}
      </div>
    </Layout>
  );
};
