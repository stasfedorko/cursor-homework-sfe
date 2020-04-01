
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

let studentsSubjects = GET_SUBJECTS(STUDENTS[0]);
export default studentsSubjects;