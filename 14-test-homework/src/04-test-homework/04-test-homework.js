

const STUDENTS = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const THEMES = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const MARKS = [4, 5, 5, 3, 4, 5];


// 1. Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с парами студентов: [["Саша", "Лена"], [..], [...]];
function makePairs(item) {
	const MAN_STUDENTS = ["Саша", "Игорь", "Алексей"];
	const WOMEN_STUDENTS = ["Лена", "Ира", "Светлана"];
	let studentPair = [];
	for(let i = 0; i < Math.floor(item.length / 2); i++){
		studentPair[i] = [MAN_STUDENTS[i], WOMEN_STUDENTS[i]]; 
	}
	return studentPair;
}
let studentPair = makePairs(STUDENTS);

export default studentPair;
