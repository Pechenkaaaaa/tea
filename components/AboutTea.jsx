const React = require('react');
const Layout = require('./Layout');
const TeaChat = require('./TeaChat');
const FormAddComment = require('./FormAddComment');

function AboutTea({ tea, user, comments }) {
  

  return (
    <Layout tea={tea} user={user}>
    <div className="teaItems" data-teaid={tea.id}>
    <h1 className="tea-title">{tea.title}</h1>
        <div className="tea-card">

          <img className="tea-img" src={tea.img} alt="картинка" />
          <div>
          <p className="tea-area">Страна происхождения: {tea.area}</p>
          <p className="tea-description">{tea.description}</p>
          </div>
        </div>
        {user && user.id ? (
        <>
        <h3>Оставьте свое мнение о чае</h3>
        <FormAddComment tea={tea} />
        <TeaChat comment={comments} tea={tea} />
        </>
        ) : (<></>)}
    </div>
    </Layout>
  );
}

module.exports = AboutTea;