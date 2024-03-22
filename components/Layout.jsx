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
        <script src="https://api-maps.yandex.ru/2.1/?apikey=2b8c8ac9-1006-459d-9cf9-037513872d60&lang=ru_RU" type="text/javascript"></script>
        <link rel="stylesheet" href="/styles/aboutTea.css" />
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
