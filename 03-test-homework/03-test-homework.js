console.log("SFE homework #03");

// P.S. оставляю комментарии до продакшнена)


// 1
function getMaxDigit(){
	let getUserRadnomNumber = null;
	let stringRadnomNumber = null;
	let arrayRadnomNumber = null;
	let sortArrayRadnomNumber = null;
	let maxDigit = null;

	do{
		getUserRadnomNumber = +prompt("Введите любое число и я покажу вам самую большую цифру в этом числе.");
	} while(!getUserRadnomNumber || NaN);

	stringRadnomNumber = String(getUserRadnomNumber);
	arrayRadnomNumber = [...stringRadnomNumber];
	sortArrayRadnomNumber = arrayRadnomNumber.sort();
	maxDigit = sortArrayRadnomNumber.pop();
	maxDigit = +maxDigit;

	// console.log("Вы ввели число " + getUserRadnomNumber + ". Самая большая цифра в нем: " + maxDigit);
	alert("Вы ввели число " + getUserRadnomNumber + ". Самая большая цифра в нем: " + maxDigit);
	return maxDigit;
}
let maxDigit = getMaxDigit();




// 2
let powNumber = +prompt("Введите число из которого нужно вычислить степень.           (проверки не делал, вводите только целые числа)");
let powPower = +prompt("Введите степень");

function functionPow(number, power){
	if (power === 0) return 1;
	let result = number;
	for (let i = 1; i < power; i++) {
		result *= number;
	}
	return result;
}
alert("2. Вы ввели число " + powNumber + " и степень " + powPower + ", результат: " + functionPow(powNumber, powPower));
// console.log("2. Вы ввели число " + powNumber + " и степень " + powPower + ", результат: " + functionPow(powNumber, powPower));





// 3
function capitalizeTheFirstLetter(){
	let getUserName = null;
	let toLowerCaseUserName = null;
	let toUpFirstLetterUserName = null;

	do{
		getUserName = prompt("Введите свое имя или нажмите ОК.", "uSer");
	} while(+getUserName || NaN);

	toLowerCaseUserName = getUserName.toLowerCase();
	toUpFirstLetterUserName = toLowerCaseUserName[0].toUpperCase() + toLowerCaseUserName.slice(1);

	// console.log("Вы ввели имя: " + toUpFirstLetterUserName);
	return toUpFirstLetterUserName;
}
let toUpFirstLetterUserName = capitalizeTheFirstLetter();




// 4
function deductTax(){

	const TAX_PERCENTAGE = 19.5;
	let userSalary = null;
	let netSalary = null;

	userSalary = prompt("Введите сумму зарплаты, вычислим сколько останется после оплаты налога ");
	taxFromSalary = userSalary / 100 * TAX_PERCENTAGE;
	netSalary = userSalary - taxFromSalary;

	// console.log("Ваша зарплата после уплаты налога (" + taxFromSalary + " грн) составит: " + netSalary + " грн");
	return netSalary;
}
let netSalary = deductTax();





// 5
function getRandomNumber(min, max) {
	let randomNumber = null;
	let randomNumberFloor = null;

	randomNumber = min + Math.random() * (max + 1 - min);
	randomNumberFloor = Math.floor(randomNumber);
	return randomNumberFloor;
}

let minRandomNumber = null;
let maxRandomNumber = null;
minRandomNumber = +prompt("Введите число от которого вы хотите получить cлучайное.");
maxRandomNumber = +prompt("Введите число до которого вы хотите получить cлучайное.");
// console.log( getRandomNumber(minRandomNumber, maxRandomNumber) );





// 6
function calculateSpecifiedLetters(letter, str) {
	let countLetter = null;
	let strToLowerCase = str.toLowerCase();

	for (let position = 0; position < strToLowerCase.length; position++) {
		if (strToLowerCase.charAt(position) == letter) {
			countLetter += 1;
		}
	}
	return countLetter;
}
let countTheLettersInThisWord = null;
countTheLettersInThisWord = prompt("Введите слово в котором вы хотите посчитать букву 'a' или нажмите ОК", "Асталависта");
// console.log( calculateSpecifiedLetters('а', countTheLettersInThisWord) );






// 8
function getRandomPassword(number) {
	return Math.ceil(Math.random() * number);
}
let randomPasswordNumber = getRandomPassword(99999999);
// console.log( randomPasswordNumber );





// 10
function isPalyndrom(str) {
	let result = true;
	const HALF_LENGTH = str.length / 2;

	for (let i = 0; i < HALF_LENGTH; i++) {
		const LEFT_CHAR = str[i];
		const RIGHT_CHAR = str[str.length - (i + 1)];

		if (LEFT_CHAR !== RIGHT_CHAR) {
			return false;
		}
	}

	return result;
}

let palyndromCheked = isPalyndrom("мадам");
// console.log(palyndromCheked);






let htmlText = `
	1. Самая большая цифра в вашем числе: <b>${maxDigit}</b>. </br>
	2. Вы ввели число ${powNumber} и степень ${powPower}, результат: <b>${functionPow(powNumber, powPower)}</b>. </br>
	3. Вы ввели имя: <b>${toUpFirstLetterUserName}</b>. </br>
	4. Ваша зарплата после уплаты налога составит: <b>${netSalary}</b> грн. </br>
	5. Вы хотите получить случайное число от ${minRandomNumber} до ${maxRandomNumber}, вот ваше случайное число: <b>${getRandomNumber(minRandomNumber, maxRandomNumber)}</b>. </br>
	6. Вы ввели слово ${countTheLettersInThisWord}, в нем содержится <b>${calculateSpecifiedLetters('а', countTheLettersInThisWord)} букв 'а'</b>. </br>
	8. Случайный пароль с числа 99999999 - <b>${randomPasswordNumber}</b>. </br>
	10. Является ли слово "мадам" палиндромом? Ответ: <b>${palyndromCheked}</b>. </br>
`;
document.getElementById("htmlText").innerHTML = htmlText;



















