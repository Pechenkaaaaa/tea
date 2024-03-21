const React = require('react');
// const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (

    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/index.css" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>
        <section />
        {/* <Navbar user={user} /> */}
        {children}
      </body>
    </html>

  );
}

module.exports = Layout;
