const regForm = document.querySelector('.sign-up');
const authForm = document.querySelector('.sign-in');

if (regForm) {
  // повесили слушатель событий по кнопке
  regForm.addEventListener('submit', async (e) => {
    // останавливаем дефолтное поведение
    e.preventDefault();

    // в цель события попадают форма в виде объекта,
    // где ключ - name, значение - value
    const {
      name, email, password, cpassword, img, role,
    } = e.target;
    const regexp = /^[а-яёА-ЯЁa-zA-Z0-9@]+$/;

    if (email.value.trim() === '' || name.value.trim() === '' || password.value.trim() === '' || cpassword.value.trim() === '' || role.value.trim() === '') {
      alert('Заполните обязательные поля!');
    } else if (password.value.length < 4) {
      alert('Пароль не может быть короче 4-ех символов');
    } else if (!regexp.test(name.value)) {
      alert('Поле с именем может содержать только символы кириллицы/латиници и цифры');
    } else {
      if (password.value === cpassword.value) {
        const user = {
          name: name.value,
          email: email.value,
          password: password.value,
          img: null,
          role: role.value,
        };

        // fetch - отправили информацию с userom на сервер
        const res = await fetch('/api/auth/registration', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(user),
        });

        const data = await res.json();

        if (data.message === 'success') {
          window.location.assign('/');
          return;
        }
      }
      alert('пароли не совпадают!');
    }
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    if (email.value.trim() === '' || password.value.trim() === '') {
      alert('Заполните обязательные поля!');
    } else {
      // fetch
      const res = await fetch('/api/auth/authorization', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      const data = await res.json();

      if (data.message === 'success') {
        window.location.assign('/');
      } else {
        alert('Такого пользователя нет в системе, либо пароль неверный');
      }
    }
  });
}
