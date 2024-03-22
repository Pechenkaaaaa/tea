const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (

    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/card.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/auth.css" />
        <script defer src="/scripts/auth.js" />
      
        <script src="https://api-maps.yandex.ru/2.1/?apikey=9ea303dc-34dc-42f0-930a-87161745f688&lang=ru_RU"></script>
        </head>
      <body>
        <section />
        <Navbar user={user} />     
        {children}
      </body>
    </html>

  );
}

module.exports = Layout;
