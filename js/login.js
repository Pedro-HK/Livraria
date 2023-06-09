(function () {
  const $user = document.getElementById('login_email');
  const $password = document.getElementById('login_senha');
  const $login = document.querySelector('.button_login');

  let data;

  fetch('../data.json')
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      data = body.data;
      data = data.login;
    });

  function getLogin(data) {
    data.forEach((user) => {
      if (user.email === $user.value && user.password === $password.value) {
        $login.setAttribute('href', '../index.html');
      } else {
        $login.setAttribute('href', '#');
      }
    });
  }

  $login.addEventListener('click', () => {
    getLogin(data);
  });
})();
