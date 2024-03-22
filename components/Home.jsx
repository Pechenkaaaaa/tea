const React = require('react');
const Layout = require('./Layout');

function Home({ title, user, teas}) {
  return (
  
    <Layout title={title} user={user}>
              <script src="https://api-maps.yandex.ru/2.1/?apikey=9ea303dc-34dc-42f0-930a-87161745f688&lang=ru_RU"></script>

      <h1>Home Page</h1>
      <center><div id="map" className='d-flex justify-content-center align-items-center'></div></center>
    </Layout>
  );
}

module.exports = Home;