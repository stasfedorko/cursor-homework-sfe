console.log("SFE homework #02");


let n = null;
let m = null;
let addedNumbersFromNtoM = null;


// Получаем от пользователя число и переводим его со строки в число.
// Проверяем является ли переданное значение N ЦЕЛЫМ числом.
do{
	n = +prompt("Please enter a random number (integer).");
} while(!n || NaN || !Number.isInteger(n));
console.log("N = " + n);


// Получите у пользователя число(M)
// Проверяем является ли переданное значение M ЦЕЛЫМ числом.
// Проверяем что бы число M было больше числа N
do{
	m = +prompt("Please enter another random number (integer).");
} while(!m || NaN || !Number.isInteger(m) || m <= n);
console.log("M = " + m);


// нужно ли пропускать четные числа. TRUE – нужно, FALSE – не нужно
let skipEvenNumbers = confirm("Пропускать четные числа?");
console.log("Skip even numbrs: " + skipEvenNumbers);


// цикл, который будет складывать числа от ранее полученных N и M
for (let i = n; i <= m; i++) {
	if (skipEvenNumbers){
		if( (i % 2)!== 0 ){
			addedNumbersFromNtoM = addedNumbersFromNtoM + i;
		}
	}
	else  {
		addedNumbersFromNtoM = addedNumbersFromNtoM + i;
	}
}
console.log(addedNumbersFromNtoM);


let htmlText = `
	The sum of the numbers you entered is exactly (from N to M): <b> ${addedNumbersFromNtoM} </b>
`;
document.getElementById("htmlText").innerHTML = htmlText;



















