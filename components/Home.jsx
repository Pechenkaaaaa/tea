const React = require('react');
const Layout = require('./Layout');

function Home({ title, categories, user }) {
  return (
  
    <Layout title={title} user={user}>
      <h1>Home Page</h1>

    </Layout>
  );
}

module.exports = Home;