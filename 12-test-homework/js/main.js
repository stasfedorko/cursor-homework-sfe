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





const BASE = `https://swapi.co/api/`;
const PEOPLE = BASE + `people/`;
const PLANETS = BASE + `planets/`;
let button = document.getElementById('button');
let cardContainer = document.querySelector('.film-info-section > .container > .card-container');

button.addEventListener('click', function getMovieCharacters() {
  let promise = new Promise(async function (resolve, reject) {
    cardContainer.innerHTML = '';
    let result = await axios.get(BASE + "films/" + moviePart.value + "/");
    resolve(result.data.characters);
  });
  promise.then(movieСharacters => {
    movieСharacters.forEach(async element => {
      const CHARACTER = await axios.get(element);
      let wrap = document.createElement('div');
      wrap.classList.add('character-card');
      wrap.innerHTML=`
        <img class="character-card-image" src="./img/${CHARACTER.data.name}.png" alt="">
        <div class="character-card-content">
          <h5 class="character-card-title"> <span> Name: </span> ${CHARACTER.data.name} </h5>
          <span class="character-card-info"> Birth year: ${CHARACTER.data.birth_year} </span>
          <span class="character-card-info"> Male: ${CHARACTER.data.gender} </span>
        </div>
      `;
      cardContainer.append(wrap);
    });
  })
});







let prev = document.getElementById('prev');
let next = document.getElementById('next');
let planetList = 1;

prev.addEventListener("click", function() {
  if (planetList != 1) {
    planetList--;
    getPlanets(planetList).then(showPlanets);
    if (planetList === 1) {
      document.getElementById('prev').disabled = true;
    } else {
      document.getElementById('prev').disabled = false;
    };
    if (planetList === 6) {
      document.getElementById('next').disabled = true;
    } else {
      document.getElementById('next').disabled = false;
    };
  };
});

next.addEventListener("click", function() {
  if (planetList != 6) {
    planetList++;
    getPlanets(planetList).then(showPlanets);
    if (planetList === 1) {
      document.getElementById('prev').disabled = true;
    } else {
      document.getElementById('prev').disabled = false;
    };
    if (planetList === 6) {
      document.getElementById('next').disabled = true;
    } else {
      document.getElementById('next').disabled = false;
    }
  };
});

async function getPlanets(planetList = 1) {
  let config = {
    params: {
      'page' : planetList
    }
  };
  const planets = await axios.get(BASE + `planets/`, config);
  return planets.data.results;
}

function showPlanets(planets){
  let planetContainer = document.querySelector(".planets-container");
  planetContainer.innerHTML = "";
  planets.forEach(curr => {
    let listOfPlanets = document.createElement("div")
    listOfPlanets.classList.add('planet-card');
    listOfPlanets.innerHTML=`
      <img class="planet-card-image" src="./img/planet-icon.png" alt="">
      <h5 class="planet-card-title"> ${curr.name} </h5>
    `;
    planetContainer.append(listOfPlanets);
  })
  planetContainer.append(planetContainer);
}

getPlanets().then(showPlanets);


