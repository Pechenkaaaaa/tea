const React = require('react');
const Layout = require('./Layout');

function Home({ title, user }) {
  return (
  
    <Layout title={title} user={user}>
      <h1>Home Page</h1>
      <div id="map"></div>
    </Layout>
  );
}

module.exports = Home;