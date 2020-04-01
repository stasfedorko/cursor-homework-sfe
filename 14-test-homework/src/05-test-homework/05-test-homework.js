
// 1. Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел. В функции есть параметры: length - длина массива, min – минимальное значение целого числа, max – максимальное значение целого числа. 
function getRandomArray(length, min, max){
	let randomArrey = [];
	for (let i = 0; i < length; i++) {
		randomArrey[i] = Math.floor(Math.random() * (max - min) + min);
	}
	return randomArrey;
}

let randomNumbers = getRandomArray(15, 1, 100);
export default randomNumbers;