console.log("SFE homework #01");

let task1 = "1. Используя встроенный объект Math – выведите максимальное число.";
let task2 = "2. Используя встроенный объект Math – выведите минимальное число.";
let task3 = "3. Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму.";
let task4 = "4. Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить копейки в наших товарах) и выведите это значение.Округление использовать в МЕНЬШУЮ сторону.";
let task5 = "5. Выведите сумму товаров округленную до сотен.";
let task6 = "6. Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?";
let task7 = "7. Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.";
let task8 = "8. Выведите среднее значение цен, округленное до второго знака после запятой.";
let task9 = "9. (Более сложное) Создайте переменную, в которой сохраним случайную скидку (используйте функцию Math.random).";

// sporting goods prices
const SHORTS = 15.678;
const SNEAKERS = 123.965;
const BALL = 90.2345;

// task 1
sportGoods = [SHORTS, SNEAKERS, BALL];
console.log(task1 + " result: " + Math.max(...sportGoods));

// task 2
console.log(task2 + " result: " + Math.min(...sportGoods));

// task 3
sportGoodsPrice = SHORTS + SNEAKERS + BALL;
console.log(task3 + " result: " + sportGoodsPrice);

// task 4
let shortsRoundingFloor = Math.floor(SHORTS);
let sneakersRoundingFloor = Math.floor(SNEAKERS);
let ballRoundingFloor = Math.floor(BALL);
let sportGoodsPriceRoundingFloor = shortsRoundingFloor + sneakersRoundingFloor + ballRoundingFloor;
console.log(task4 + " result: " + sportGoodsPriceRoundingFloor);

// task 5
let amountOfGoodsRoundedToHundreds = Math.ceil(sportGoodsPrice/100)*100;
console.log(task5 + " result: " + amountOfGoodsRoundedToHundreds);

// task 6
let sportGoodsPriceFloor = Math.floor(sportGoodsPrice);
let isEven = function(someNumber) {
	return (sportGoodsPriceFloor % 2 == 0) ? true : false;
};
console.log(task6 + " result: " + isEven() + " " + "(" + sportGoodsPriceFloor + ")");

// task 7
let amountOfChange = 500 - sportGoodsPrice;
console.log(task7 + " result: " + amountOfChange + " грн");

// task 8
let averagePrice = sportGoodsPrice / 3;
console.log(task8 + " result: " + parseFloat(averagePrice.toFixed(2)));

// task 9
let randomDiscount = Math.random();
let calculateCustomerDiscount = (randomDiscount + 1) * 10;
let customerDiscount = Math.floor(calculateCustomerDiscount);
let customerDiscountPercent = customerDiscount / 100;
console.log("Сумма для оплаты: " + sportGoodsPrice + " грн");
console.log("Случайная скидка клиента " + customerDiscount + "%");
let amountPayable = sportGoodsPrice - (sportGoodsPrice * customerDiscountPercent);
console.log("Сумма со скидкой: " + parseFloat(amountPayable.toFixed(2)) + " грн");

// сумма скидки
let discountAmount = sportGoodsPrice - amountPayable;
console.log("Скидка составила: " + parseFloat(discountAmount.toFixed(2)) + " грн");

// себестоимость
let netCost = sportGoodsPrice / 2;
console.log("Себестоимость товара: " + netCost + " грн");

// упущенная выгода
let lostProfit = netCost - discountAmount;
console.log("Упущенная выгода: " + lostProfit + " грн");

let htmlText = `
	1. Максимальная цена: <b> ${Math.max(...sportGoods)} </b> <br>
	2. Минимальная цена: <b> ${Math.min(...sportGoods)} </b> <br>
	3. Стоимость всех товаров: <b> ${sportGoodsPrice} </b> <br>
	4. Сложите только целую часть стоимости всех товаров: <b> ${sportGoodsPriceRoundingFloor} </b> <br>
	5. Сумма товаров округленная до сотен: <b> ${amountOfGoodsRoundedToHundreds} </b> <br>
	6. Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом? result: <b> ${isEven() + " " + "(" + sportGoodsPriceFloor + ")"} </b> <br>
	7. Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн. result: <b> ${amountOfChange} грн. </b> <br>
	8. Выведите среднее значение цен, округленное до второго знака после запятой. <b> ${parseFloat(averagePrice.toFixed(2))} </b> <br>
	9. Создайте переменную, в которой сохраним случайную скидку. <br>

		<em>
			- Сумма для оплаты: <b>${sportGoodsPrice} грн</b>  <br>
			- Случайная скидка клиента: <b>${customerDiscount} %</b>  <br>
			- Сумма со скидкой: <b>${parseFloat(amountPayable.toFixed(2))} грн</b>  <br>
			- Скидка составила: <b>${parseFloat(discountAmount.toFixed(2))} грн</b>  <br>
			- Себестоимость товара: <b>${netCost} грн</b>  <br>
			- Упущенная выгода: <b>${lostProfit} грн</b>  <br>
		</em>
`;

document.getElementById("htmlText").innerHTML = htmlText;























