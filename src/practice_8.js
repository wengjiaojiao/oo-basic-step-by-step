function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return "My name is Tom. I am 21 years old.";
};

function Student(name, age, lesson) {
    Person.call(this, name, age);
    this.lesson = lesson;
}

function Lesson(number) {
    this.number = number;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.basic_introduce = Student.prototype.introduce;

Student.prototype.introduce = function () {
    return this.basic_introduce() + " I am a Student. I am at Class " + this.lesson.number + ".";
};

function Teacher(name, age, lesson) {
    Person.call(this, name, age);
    this.lesson = lesson;

}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.basic_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function(lesson) {
    if(lesson.number !== undefined) {
        return this.basic_introduce() + " I am a Teacher. I teach Class " + this.lesson.number + ".";
    }else {
        return this.basic_introduce() + " I am a Teacher. I teach No Class."
    }
};

Teacher.prototype.introduceWith = function(student) {
    if(student.lesson.equal(this.lesson)) {
        return this.basic_introduce() + " I am a Teacher. I teach " + student.name + ".";
    }else {
        return this.basic_introduce() + " I am a Teacher. I don't teach Jerry.";
    }
};

Lesson.prototype.equal = function (lesson) {
    return lesson && this.number === lesson.number;
}

module.exports = {
    Person : Person,
    Student : Student,
    Teacher : Teacher,
    Lesson : Lesson
}