console.log("SFE homework #13");


// Задание 1:
// Создайте бесконечный генератор идентификаторов. Должен работать следующим образом:
// const idGenerator = createIdGenerator();
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3
// ...


// Задание 2 (advanced)
// Создайте генератор, который будет регулировать размеры шрифта для вашего сайта. (Можно доработать чтобы реально менял шрифт, но это не является обязательным условием)
// Работать генератор будет следующим образом:
// const fontGenerator = newFontGenerator(14); // 14 – стартовое значение
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12


function* createIdGenerator() {
  for(let i = 1; i >= 1; i++) {
    yield i;
  }
}
const ID_GENERATOR = createIdGenerator();
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);
console.log('ID_GENERATOR.next().value ->', ID_GENERATOR.next().value);



function* newFontGenerator(font) {
  while(true) {
    let value = yield font;
    if(value === 'up') font += 2
    else if(value === 'down') font -= 2;
  }
}
const FONT_GENERATOR = newFontGenerator(14);
console.log(`FONT_GENERATOR.next('up').value -> `, FONT_GENERATOR.next('up').value);
console.log(`FONT_GENERATOR.next('up').value -> `, FONT_GENERATOR.next('up').value);
console.log(`FONT_GENERATOR.next('up').value -> `, FONT_GENERATOR.next('up').value);
console.log(`FONT_GENERATOR.next('up').value -> `, FONT_GENERATOR.next('up').value);
console.log(`FONT_GENERATOR.next().value -> `, FONT_GENERATOR.next().value);
console.log(`FONT_GENERATOR.next('down').value -> `, FONT_GENERATOR.next('down').value);
console.log(`FONT_GENERATOR.next('down').value -> `, FONT_GENERATOR.next('down').value);












// //----------
// let fontSize = 14;
// let bodyFontSize = fontSize + "px";
// let fontSizeUp = document.getElementById('fontSizeUp');
// let fontSizeDown = document.getElementById('fontSizeDown');
// let genFontSize = null;
// let refreshFontSize = null;
// console.log('bodyFontSize', bodyFontSize);

// function* pageFontGenerator(font) {
//   while(true) {
//     let value = yield font;
//     if(value === 'up') font += 2
//     else if(value === 'down') font -= 2;
//   }
// }

// fontSizeUp.addEventListener('click', function() {
//   genFontSize = pageFontGenerator(fontSize);
//   genFontSize.next('up').value;
//   // console.log(genFontSize);
// });
// fontSizeDown.addEventListener('click', function() {
//   genFontSize = pageFontGenerator(fontSize);
//   genFontSize.next('down').value;
//   // console.log(genFontSize);
// });

// refreshFontSize = document.getElementById("body").style.fontSize = bodyFontSize;

