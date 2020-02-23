console.log("SFE homework #05");

// 1. Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел. В функции есть параметры: length - длина массива, min – минимальное значение целого числа, max – максимальное значение целого числа. 
function getRandomArray(length, min, max){
	let randomArrey = [];
	for (let i = 0; i < length; i++) {
		randomArrey[i] = Math.floor(Math.random() * (max - min) + min);
	}
	return randomArrey;
}
console.log("#1 -> " + getRandomArray(15, 1, 100)); // –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]



// ------------------------------------------------
// 3. Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
function getAverage() {
  let arithmeticalMean = null;
  let sum = 0;
  let numberOfOdd = 0;
  for (let i = 0; i < arguments.length; i++ ) {
    if (parseInt(arguments[i]) === arguments[i]) {
			sum += arguments[i];
		} else {
			numberOfOdd++;
		}
  }
  arithmeticalMean = sum == 0 ? sum : sum / (arguments.length - numberOfOdd);
  return arithmeticalMean;
}
console.log("#3 -> " +  getAverage( 10.4, 5, 5, 3.5, 5, 56.8, 5) ); // -> 5
console.log("#3 -> " +  getAverage( 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) );  // -> 34.4



// ------------------------------------------------
// 4. Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
const getMedian = (...numbers) => {
	let medianNumber = null;
  let checkForIntegers = numbers.filter(number => {
    return Number.isInteger(number);
	});
	medianNumber = checkForIntegers;
	let doSorting = () => {
		let len = medianNumber.length;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (medianNumber[j] > medianNumber[j + 1]) {
					let temp = medianNumber[j];
					medianNumber[j] = medianNumber[j + 1];
					medianNumber[j + 1] = temp;
				}
			}
		}
		return medianNumber;
	};
	medianNumber = doSorting(medianNumber);
	let getMedianNumber = (arr) => {
		let isEven = arr.length % 2 === 0;
		return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
	}
	let hereIsTheMedianNumber = getMedianNumber(medianNumber);
	return	hereIsTheMedianNumber;
}
console.log("#4 -> " + getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); // –> 23 
console.log("#4 -> " + getMedian(1, 2, 3, 4));  // –> 2.5 
console.log("#4 -> " + getMedian(1, 2, 3, 4, 5));  // –> 3
console.log("#4 -> " + getMedian(103, 333, 3, 4.5, 55, 45, 1, 2, 3, 4, 5));



// ------------------------------------------------
// 5. Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа переданные как аргументы функции
const filterEvenNumbers = (...numbers) => {
	let numbersToFilter = numbers;
	const filtered = numbersToFilter.filter(num => {
		if (num % 2) {
			return num;
		}
	});
	return filtered;
}
console.log("#5 -> " + filterEvenNumbers(1, 2, 3, 4, 5, 6));  // -> [1, 3, 5]
console.log("#5 -> " + filterEvenNumbers(34, 55, 37, 50, 67, 1, 8));



// ------------------------------------------------
// 6. Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел больших 0
const countPositiveNumbers = (...numbers) => {
	let filtered = numbers.filter(num => {
		if (num > 0) {
			return num;
		}
	});
	filtered = filtered.length;
	return filtered;
}
console.log("#6 -> " + countPositiveNumbers(1, -2, 3, -4, -5, 6));  // -> 3
console.log("#6 -> " + countPositiveNumbers(1, -2, 3, -4, -5, 6, -3, 3, 44)); // -> 5



// ------------------------------------------------
// 7. Создайте функцию getDividedByFive(...numbers) – которая отфильтрует все элементы в массиве и оставит только те, которые делятся нацело на 5
const getDividedByFive = (...numbers) => {
	let numbersToFilter = numbers;
	const filtered = numbersToFilter.filter(num => {
		if (!(num % 5)) {
			return num;
		}
	});
	return filtered;
}
console.log("#7 -> " + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));  // -> [55, 55]
console.log("#7 -> " + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 20, 15, 10, 5));