console.log("SFE homework #7");

const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Создайте функцию getMyTaxes.call(country, salary) -> number; – которая считает сколько налогов вы заплатите как IT-специалист в какой-либо стране. Функция должна вызываться через call и работать с данными через this
function getMyTaxes(country) {
  return country * this.tax;
}
console.log('1. getMyTaxes.call(LITVA, 3500) => ', getMyTaxes.call(LITVA, 3500));



// 2. Создайте функцию getMiddleTaxes.call(country) -> number; – которая считает сколько в среднем налогов платят IT-специалистсы в каждой стране. (tax * middleSalary). Функция должна вызываться через call и работать с данными через this
function getMiddleTaxes() {
  let middleTexes = this.tax * this.middleSalary;
  return middleTexes;
}
console.log('2. getMiddleTaxes.call(LATVIA) => ', getMiddleTaxes.call(LATVIA));



// 3. Создайте функцию getTotalTaxes.call(country) -> number; – которая считает сколько всего налогов платят IT-специалистсы в каждой стране. (tax * middleSalary * vacancies). Функция должна вызываться через call и работать с данными через this
function getTotalTaxes() {
  let totalTaxes = this.tax * this.middleSalary * this.vacancies;
  return totalTaxes;
}
console.log('3. getTotalTaxes.call(UKRAINE) => ', getTotalTaxes.call(UKRAINE));




// 4. Создайте функцию getMySalary(country) – которая будет писать в консоль объект вида: { salary: number, taxes: number, profit: number } каждые 10 секунд. Значения salary – генерируйте случайным образом в диапазоне 1500-2000. taxes – расчитывается в зависимости от выбранной страны и значения salary. profit = salary - taxes;
function getMySalary(country) {
  let mySalary = {};
  mySalary.salary = Math.floor(1500 + Math.random() * Math.floor(2000 - 1500));
  mySalary.taxes = Math.floor(this.tax * mySalary.salary);
  mySalary.profit = mySalary.salary - mySalary.taxes;
  return mySalary;
}
console.log('4. getMySalary (random every 10 sec) => ', getMySalary.call(LITVA));
setInterval(() => console.log('4. getMySalary (random every 10 sec) => ', getMySalary.call(LITVA)), 10000);


