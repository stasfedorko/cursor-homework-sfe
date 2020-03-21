console.log("SFE homework #11");

// Создайте функцию, которая возвращает промис getRandomChinese(length). Функция работает следующим образом:
// Запускается цикл(подсказка: можно использовать while) length раз, каждый проход цикла смотрим на последние 5 цифр результата вызова метода Date.now() Например получили const sign = 16086;.
// Конвертируем полученныую цифру в строку String.fromCharCode(sign); и ждем 50 ms
// Функция gerRandomChinese(length) должна вернуть строку длинной (length) с китайскими иероглифами. Время работы промиса должно составлять length * 50ms.
// (Если вызвать getRandomChinese(4), получим результат "촛궻簽紙" за 200ms


function generateSign() {
  let sign = new Promise(number => {
    setTimeout(() => {
      let dateNow = Date.now();
      number(String.fromCharCode(dateNow.toString().slice(-5)));
    }, 50);
  });
  return sign;
}
async function getRandomChinese(length) {
  let i = 0;
  let chineseСharacters ='';
  while (i < length) {
    chineseСharacters = chineseСharacters + await generateSign();
    i++;
  }
  return console.log(chineseСharacters);
}
getRandomChinese(4);