"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_5.js").Person;
var Student = require("../../src/practice_5.js").Student;
var Worker = require("../../src/practice_5.js").Worker;

describe("practiceThree", function(){
    it("should tell us if the person properties is defined",function() {
        var person = new Person("Tom",21);
        var name = "Tom";
        var age = 21;

        expect(person.name).equal(name);
        expect(person.age).equal(age);

    });

    it("should print name and age about person introduce function", function () {
        var name = "Tom";
        var age = 21;
        var person = new Person(name,age);

        expect(person.introduce()).equal("My name is Tom. I am 21 years old.");
    });

    it("should print class about student introduce function", function() {
        var student = new Student("Tom", 21, 2);

        expect(student.introduce()).equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });


    it("should print class about worker introduce function", function() {
        var worker = new Worker("Tom", 21);

        expect(worker.introduce()).equal("My name is Tom. I am 21 years old. I am a Worker. I have a job.");
    });
});