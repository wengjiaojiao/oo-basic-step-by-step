"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_8.js").Person;
var Student = require("../../src/practice_8.js").Student;
var Teacher = require("../../src/practice_8.js").Teacher;
var Lesson = require("../../src/practice_8.js").Lesson;

describe("practiceThree", function(){

    it("should print name and age about person introduce function", function () {
        var name = "Tom";
        var age = 21;
        var person = new Person(name,age);

        expect(person.introduce()).equal("My name is Tom. I am 21 years old.");
    });

    it("should print class about student introduce function", function() {
        var lesson = new Lesson(2);
        var student = new Student("Tom", 21, lesson);

        expect(student.introduce()).equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });


    it("should print the inputting class about worker introduce function", function() {
        var lesson = new Lesson(2);
        var teacher = new Teacher("Tom", 21, lesson);

        expect(teacher.introduce(lesson)).equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");
    });

    it("should print null class about worker introduce function", function() {
        var lesson = new Lesson();
        var teacher = new Teacher("Tom", 21, lesson);

        expect(teacher.introduce(lesson)).equal("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");
    });

    it("should print the student name  who in the teach class ", function() {
        var lesson = new Lesson(2);
        var student = new Student("Jerry",21,lesson);
        var teacher = new Teacher("Tom", 21, lesson);

        expect(teacher.introduceWith(student)).equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");
    });

    it("should print the student name  who not in the teach class ", function() {
        var lessonS = new Lesson(1);
        var lessonT = new Lesson(2);
        var student = new Student("Jerry",21,lessonS);
        var teacher = new Teacher("Tom", 21, lessonT);

        expect(teacher.introduceWith(student)).equal("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
    });
});