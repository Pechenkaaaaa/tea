const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title }) {
  return (

    <Layout title={title}>
      <div className="container-auth">
        <h2>Зполните поля для регистрации:</h2>
        <form className="sign-up">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="cpassword" placeholder="confirm password" />
          {/* <input type="text" name="img" placeholder="avatar" /> */}
          <input type="text" name="role" placeholder="role" />
          <button type="submit">Registration</button>
        </form>
      </div>
    </Layout>

  );
}

module.exports = RegistrationPage;
