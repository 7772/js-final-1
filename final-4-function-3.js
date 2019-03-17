/**
 * 프로토타입을 이용하여 상속 구조의 클래스 정의하기
 */

function Person() {
  this.name;
  this.age;
}

Person.prototype.setName = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.setAge = function(age) {
  this.age = age;
};

Person.prototype.getAge = function() {
  return this.age;
};

Person.prototype.introduce = function() {
  console.log("저의 이름은 " + this.name + " 입니다. 나이는 " + this.age + " 살 입니다.");
};

function Professor() {
  this.subject;
}

Professor.prototype = new Person();

Professor.prototype.setSubject = function(subject) {
  this.subject = subject;
};

Professor.prototype.getSubject = function() {
  return this.subject;
};

Professor.prototype.setGrade = function(student, subject, grade) {
  if (subject !== this.subject) {
    console.log(this.name + ' 교수님!! ' + '본인이 가르치는 과목만 성적을 부여할 수 있습니다.');
    return;
  }

  if (
    typeof student === 'object' &&
    student.hasOwnProperty('grades')
  ) {
    student.grades.push({
      subject: subject, 
      grade: grade
    });
  }
};

function Student() {
  this.grades = [];
}

Student.prototype = new Person();
Student.prototype.getGrade = function(subject) {
  var returnVal = this.name + ' 학생은 ' + subject + ' 과목을 수강한 적이 없네요.';

  for (var i = 0; i < this.grades.length; i++) {
    if (this.grades[i].subject === subject) {
      returnVal = this.grades[i].grade;
      break;
    }
  }

  return returnVal;
};

var professor = new Professor();
professor.setName('김교수');
professor.setAge(58);
professor.setSubject('물리학');

var student = new Student();
student.setName('나학생');
student.setAge(20);

professor.introduce();
student.introduce();

var subject = professor.getSubject();
professor.setGrade(student, subject, 'A');

console.log(student.getGrade('물리학'));
console.log(student.getGrade('선형대수학'));

professor.setGrade(student, '선형대수학', 'F');