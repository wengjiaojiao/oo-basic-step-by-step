"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_3.js").Person;
var Student = require("../../src/practice_3.js").Student;

describe("practiceThree", function(){
    it("should tell us if the person properties is defined",function() {
        var person = new Person("Tom",21);
        var name = "Tom";
        var age = 21;

        expect(person.name).equal(name);
        expect(person.age).equal(age);

    });

    it("should print name and age about person", function () {
        var name = "Tom";
        var age = 21;
        var person = new Person(name,age);

        expect(person.introduce()).equal("My name is Tom. I am 21 years old.");
    });

    //一般不测试继承类，很复杂，要用反射。
    it("should tell us if the student properties is defined", function() {
        //var Person = new Person("Tom",21,2);
        var student = new Student("Tom", 21, 2);

        expect(student.name).equal("Tom");
        expect(student.age).equal(21);
        expect(student.lesson).equal(2);

    });

    it("should print class about student", function() {
        var student = new Student("Tom", 21, 2);

        expect(student.introduce()).equal("I am a Student. I am at Class 2.");
    });
});