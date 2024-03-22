const React = require('react');
const Layout = require('./Layout');

function AboutTea({ tea, user }) {
  
  return (
    <Layout tea={tea} user={user}>
    <div className="teaItems" data-teaid={tea.id}>
    <h1 className="tea-title">{tea.title}</h1>
        <div className="tea-card">

          <img className="tea-img" src={tea.img} alt="картинка" />
          <div>
          <p className="tea-area">Страна происхождения: {tea.area}</p>
          <p className="tea-description">{tea.description}</p>
          {user && user.role === 'admin' ? (
            <>
              {/* <a className="btn-tea-update" href={`/product/${tea.id}/update`}><img style={{ width: '26px', height: '28px' }} src="/img/pencil-logo.png" /></a>
              <img className="btn-tea-delete" style={{ width: '30px', height: '32px' }} src="/img/trash-logo.png" /> */}

             <button>wqe</button>
            </>
          ) : (<></>)}
          </div>
        </div>
    </div>
    </Layout>
  );
}

module.exports = AboutTea;