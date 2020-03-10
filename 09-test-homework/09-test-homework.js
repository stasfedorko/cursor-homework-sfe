console.log("SFE homework #9");

// Сделайте 25 квадратов размера 50х50 пикселей каждый окрашенные в случайный цвет. Квадраты должны располагаться по 5 в ряд.
// Чтобы квадраты появились на странице, необходимо вызвать функцию generateBlocks();

let generateRandomColor = () => {
  let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
};
let createSquare = () => {
  const SQUARE_CONTAINER = document.querySelector('.js-square-container');
  const SQUARE = document.createElement('div');
  SQUARE.className = 'js-square square';
  SQUARE.style.backgroundColor = generateRandomColor();
  SQUARE_CONTAINER.append(SQUARE);
};
let generateBlocks = () => {
  for(let i = 0; i < 25; i++){
    createSquare();
  }
};
generateBlocks();




// Advanced
// Сделайте так, чтобы квадраты меняли цвет раз в секунду.
// Чтобы квадраты появились на странице и начали изменяться, необходимо вызвать функцию generateBlocksInterval();
let autoSetColor = () => {
  document.querySelectorAll('.js-square').forEach(value => {
    value.style.backgroundColor = generateRandomColor();
  });
};
let generateBlocksInterval = () => {
  setInterval(() => {
    generateBlocks(autoSetColor());
  }, 1000);
};
generateBlocksInterval();