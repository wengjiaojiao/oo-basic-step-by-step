function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return "My name is " + this.name + ". I am " + this.age + " years old.";
};

function Student(name, age ,lesson){
    Person.call(this,name,age);
    this.lesson = lesson;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.basic_introduce = Student.prototype.introduce;

Student.prototype.introduce = function() {
    return this.basic_introduce() + " I am a Student. I am at Class " + this.lesson + ".";
};

function Worker(name, age){
    Person.call(this,name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.basic_introduce = Worker.prototype.introduce;

Worker.prototype.introduce = function() {
    return this.basic_introduce() + " I am a Worker. I have a job.";

};

module.exports = {
    Person : Person,
    Student : Student,
    Worker : Worker
}
