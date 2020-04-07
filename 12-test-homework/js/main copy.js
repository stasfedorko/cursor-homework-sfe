console.log("SFE homework #12");

// https://swapi.co – Работать необходимо с этим API.
// Информацию о том, как устроено АПИ ищите сами в документации!
// Представьте что вам пришла задача на работе – все что оставил бекендер это такую документацию и улетел в отпуск (нет, не в Китай, положите камни :) )
// Очень поощеряется максимально креативный подход к этому заданию – делайте стили, добавьте какой-то приятный шрифт (Если совсем туго с идеями шрифтов возьмите Roboto с Google Fonts).
// 1. Создайте кнопку: "получить информацию". При нажатии на неё получите и отобразите информацию обо всех персонажах 5 эпизода звездных войн(films/2). Обратите внимание, что необходимо изучить документацию и на основании её вывести информацию
// Выводим только: полное имя персонажа, дата рождения, пол(если сделаете иконкой будет вообще идеально).
// БОНУС ПЛЮС: Если додумаетесь как хранить и выводить фотки персонажей – будет очень здорово.
// Я дам подсказку: можно создать объект с ключ=ссылка_на_персонажа, значение=ссылка_на_фотку
// В самом АПИ фотографий нет, но ДЗшка станет намного приятнее выглядеть с изображениями персонажей!

// 2. Выведите список всех планет, которые были в звездных войнах.
// 3. Добавьте кнопку next, которая загрузит следующую страницу со списком планет. Предыдущая страница при этом должна пропасть. (происходит замена данных)
// 4. ADVANCED: Добавьте к 1 заданию поле ввода с номером фильма(номер по порядку выпуска фильма). Теперь при нажатии на кнопку – необходимо получать информацию не о 5ом эпизоде, а о фильме номер которого указан в поле ввода.
// Если указана цифра 1 – нужно передать запрос на /films/1
// 5. ADVANCED: Добавьте кнопку перевода на вукийский язык. После нажатния на кнопку – весь полученный по апи контент должен перевестись на язык вуки.
// Для этого достаточно добавить к любому запросу: ?format=wookiee.
// При должной фантазии – можете еще и текст кнопок перевести :)





// const BASE = `https://swapi.co/api`;
// const PEOPLE = BASE + `/people/`;
// const PLANETS = BASE + `/planets/`;

// async function getPeoples() {
//   let res = axios.get(PEOPLE);
//   console.log('res', res);
// }
// getPeoples();






// GET ivan.com/users?limit=10&sort=last-name
// GET ivan.com/users/{id}
// path variable - :id {id}
// POST ivan.com/users - create user
// PUT ivan.com/users/{id} - update user
// DELETE ivan.com/users/{id} - delete user


// localStorage.setItem('user', JSON.stringify({name: 'ivan'}));
// sessionStorage.setItem('user', 'ivan');

// console.log(JSON.parse(localStorage.getItem('user')));
async function a() {
  try {
    let res = await axios('https://jsonplaceholder.typicode.com/user');
    console.log('resa: ', res.data);
  } catch(err) {
    console.log('erra: ', err);
  }
}

async function f() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/user');
    console.log('res: ', res);
    if (!res.ok) {
      throw 'request failed ' + res.status;
    }
    let data = await res.json();
    console.log('resf: ', data);
  } catch(err) {
    console.log('errf: ', err);
  }
}




const KEY = 'XHk1e8xUVoVSk1NXVDUnmJvkCrXbpSxLWmwW'
const BASE = 'https://gorest.co.in/public-api'


async function getUsers(nameFilter) {
  try {
    const config = {
      headers: {'Authorization': 'Bearer ' + KEY},
      params: {first_name: nameFilter}
    };

    const res = await axios.get(BASE + '/users', config);

    return res.data.result;
  } catch (err) {
    console.log('something bad happened');
    return [];
  }
}

function renderUsers(users) {
  const container = document.querySelector('.users');
  container.innerHTML = '';

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
      <img class="user__img" src="${user._links.avatar.href}">
      <h4>${user.first_name} ${user.last_name}</h4>
      <h5>${user.email}</h5>
    `;
    container.append(userDiv);
  })
}

// function createUser(fname, lname, email) {
//   const config = {
//     method: 'POST',
//     headers: {'Authorization': 'Bearer ' + KEY},
//     data: {
//       first_name: fname,
//       last_name: lname,
//       email,
//       gender: 'male'
//     }
//   };

//   return axios(BASE + '/users', config).catch((err) => {
//     console.log('errr', err);
//   })
// }

// document.filterForm.elements.filterApply.addEventListener('click', async function(event) {
//   const val = document.filterForm.elements.filterInput.value;
//   if (!val) return;
  
//   const users = await getUsers(val);
//   document.filterForm.elements.filterInput.value = '';
//   renderUsers(users);
// });

// const fnameEl = document.querySelector('#fname');
// const lnameEl = document.querySelector('#lname');
// const emailEl = document.querySelector('#email');
// const btnCreate = document.querySelector('#create');

// btnCreate.addEventListener('click', () => {
//   if (fnameEl.value && lnameEl.value && emailEl.value) {
//     createUser(fnameEl.value, lnameEl.value, emailEl.value)
//       .then(() => {
//         fnameEl.value = '';
//         lnameEl.value = '';
//         emailEl.value = '';
//       });
//   }
// });

getUsers().then((users) => {
  renderUsers(users);
});
// getUsers().then(renderUsers)
