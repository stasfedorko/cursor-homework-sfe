console.log("SFE homework #06");

const STUDENTS = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// 1. Создайте функцию getSubjects(students[0]) --> ["Math", "Algorithms", "Data science"] - которая возвращает список предметов для конкретного студента. Обратите внимание – название предмета необходимо возвращать с большой буквы, а _ – заменить на пробел
const GET_SUBJECTS = (item) => {
  let stud = Object.keys(item.subjects);
  let result = stud.map(element => {
    if(element.includes('_')){
      element = element.replace('_', ' ');
    };
    return element[0].toUpperCase() + element.slice(1);
  });
  return result;
};
console.log('1.getSubjects =>', GET_SUBJECTS(STUDENTS[0]));




// 2. Создайте функцию getAverageMark(students[0]) --> 3.79 – которая вернёт среднюю оценку по всем предметам для переданного студента, НЕ МАССИВА СТУДЕНТОВ. Оценку округлите до 2-го знака.
let getAverageMark = (studentMark) => {
  studentMark = Object.values(studentMark.subjects);
  studentMark = studentMark.map((subject) => {
    return (subject.reduce((acc, mark) => acc + mark) / subject.length);
  });
  studentMark = studentMark.reduce((sum, eachMark) => sum + eachMark) / studentMark.length;
  studentMark = studentMark.toFixed(2);
  return studentMark;
};

console.log('2.getAverageMark =>', getAverageMark(STUDENTS[1]));




// 3. Создайте функцию getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – которая возвращает информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания). Должна быть выведена информация: курс, имя, средняя оценка.
const GET_STUDENT_INFO = (item) => {
  let studentInfo = {};
  let averageMark = getAverageMark(item);
  studentInfo.course = item.course;
  studentInfo.name = item.name;
  studentInfo.averageMark = averageMark;
  return studentInfo;
}
console.log('3.getStudentInfo =>', GET_STUDENT_INFO(STUDENTS[2]));




// 4. Создайте функцию getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – которая возвращает имена студентов в алфавитном порядке.
let getStudentsNames = (item) => {
  let studentNameList = [];
  for(let i = 0; i < item.length; i++){
    studentNameList.push(item[i].name);
  }
  studentNameList = studentNameList.sort();
  return studentNameList;
};
console.log('4.getStudentsNames =>', getStudentsNames(STUDENTS));




// 5. Создайте функцию getBestStudent(students) --> "Anton" – которая возвращает лучшего студента из списка по показателю средней оценки.
const GET_BEST_STUDENT = (studentInfo) => {
  let bestStudent = studentInfo[0];
  let bestMark = getAverageMark(studentInfo[0]);
  for (let i = 0; i < studentInfo.length; i++){
    if(bestMark <= getAverageMark(studentInfo[i])){
      bestStudent = studentInfo[i];
    };
  };
return bestStudent.name;
};
console.log('5.getBestStudent =>', GET_BEST_STUDENT(STUDENTS));




// 6. Создайте функцию calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – которая возвращает объект, в котором ключи это буквы в слове, а значения – количество их повторений.
let calculateWordLetters = (word) => {
  let parsedWord = {};
  for (let i = 0; i < word.length; i++) {
    parsedWord[word[i]] = 0;
    for (let s = 0; s < word.length; s++) {
      if (word[i] == word[s]) {
        parsedWord[word[i]] += 1;
      }
    }
  }
  return parsedWord;
};
console.log('6.calculateWordLetters =>', calculateWordLetters('cursor'));