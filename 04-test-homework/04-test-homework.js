console.log("SFE homework #04");

const STUDENTS = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const THEMES = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const MARKS = [4, 5, 5, 3, 4, 5];


// 1. Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с парами студентов: [["Саша", "Лена"], [..], [...]];
function makePairs(STUDENTS) {
	const MAN_STUDENTS = ["Саша", "Игорь", "Алексей"];
	const WOMEN_STUDENTS = ["Лена", "Ира", "Светлана"];
	let studentPair = [];
	for(let i = 0; i < Math.floor(STUDENTS.length / 2); i++){
		studentPair[i] = [MAN_STUDENTS[i], WOMEN_STUDENTS[i]]; 
	}
	return studentPair;
}
let studentPair = makePairs(STUDENTS);
console.log(studentPair);



// 2. Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. Должен получиться вложенный массив вида: [["Саша и Лена", "Теория автоматов"], [...], [...]]
function giveTopic(studentPair, THEMES) {
	let studentsWithThemes = [];
	for(let i = 0; i < Math.floor(STUDENTS.length / 2); i++){
		studentsWithThemes[i] = [studentPair[i].join(' и '), THEMES[i]];
	}
	return studentsWithThemes;
}
let studentsWithThemes = giveTopic(studentPair, THEMES);
console.log(studentsWithThemes);




// 3. Сопоставьте оценки(marks) со студентом(students): [["Саша", 4], [...], [...]]
function giveMarksToSrudent(STUDENTS, MARKS) {
	let studentsWithMarks = [];
	for(let i = 0; i < STUDENTS.length; i++){
		studentsWithMarks[i] = [STUDENTS[i], MARKS[i]]; 
	}
	return studentsWithMarks;
}
let studentsMarks = giveMarksToSrudent(STUDENTS, MARKS);
console.log(studentsMarks);




// 4. Поставьте каждой паре случайную оценку(от 1 до 5) за проект(тут функция будет нечистой, но не должна мутировать массив): [["Саша и Лена", "Теория автоматов", 5], [...], [...]]
function getMarksForProject(studentsWithThemes) {
  let pairsMarks = [];
	let randomMarks;
  for (i = 0; i < studentsWithThemes.length; i++) {
		function getRandomMarks(min, max) {
			let randResult = min + Math.random() * (max + 1 - min);
			return Math.floor(randResult);
		}
    randomMarks = getRandomMarks(1, 5);
    pairsMarks[i] = studentsWithThemes[i].concat(randomMarks);
	}
  return pairsMarks;
}
let projectMarks = getMarksForProject(studentsWithThemes);
console.log(projectMarks);



let htmlText = `
	1. Пары студентов: <b>${studentPair}</b>. </br></br>
	2. Темы для пар студентов: <b>${studentsWithThemes}</b>. </br></br>
	3. Оценки студентов: <b>${studentsMarks}</b>. </br></br>
	4. Оценки парам студентов: <b>${projectMarks}</b>. 
`;
document.getElementById("htmlText").innerHTML = htmlText;