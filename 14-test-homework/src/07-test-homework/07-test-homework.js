

const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Создайте функцию getMyTaxes.call(country, salary) -> number; – которая считает сколько налогов вы заплатите как IT-специалист в какой-либо стране. Функция должна вызываться через call и работать с данными через this
function getMyTaxes(country) {
  return country * this.tax;
}
console.log('1. getMyTaxes.call(LITVA, 3500) => ', getMyTaxes.call(LITVA, 3500));

let myTaxes = getMyTaxes.call(LITVA, 3500);
export default myTaxes;
