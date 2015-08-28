function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return "My name is " + this.name + ". I am " + this.age + " years old.";
}

function Student(name, age, lesson) {
    Person.call(this, name, age);
    this.lesson = lesson;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    return "I am a Student. I am at Class " + this.lesson + ".";
}

module.exports = {
    Person:Person,
    Student:Student
}