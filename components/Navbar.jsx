const React = require('react');

function Navbar({ user }) {

  return (
    
    <nav>
      <div className="nav-wrapper" />
      <ul>
        <li className="li_nav nav_li_left">
          <a href="/">Main</a>
        </li>
        {user ? (
          <>
            <li className="li_nav nav_li_right">
              <a href="/api/auth/logout">logout</a>
            </li>
            <li className="nav_li_right li_hello">
              Привет, {user.name}!
            </li>
          </>
        ) : (
          <>
            <li className="li_nav nav_li_right">
              <a href="/auth/registration">Sign-Up</a>
            </li>
            <li className="li_nav nav_li_right">
              <a href="/auth/authorization">Sign-In</a>
            </li>
          </>
        )}
        {user?.role === 'admin' && ( <li className="li_nav nav_li_left">
          <a href="/page/admin">Личный кабинет</a>
          </li>)}
      </ul>
      <div />
    </nav>

  );
}

module.exports = Navbar;
