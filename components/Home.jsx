const React = require('react');
const Layout = require('./Layout');

function Home({ title, user, teas}) {
  return (
  
    <Layout title={title} user={user}>
      <h1>Home Page</h1>
      <center><div id="map" className='d-flex justify-content-center align-items-center'></div></center>
    </Layout>
  );
}

module.exports = Home;