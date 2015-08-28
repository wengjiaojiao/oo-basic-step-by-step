"use strict";

var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_1.js");

describe("practiceOne", function(){
    it("should tell us if the properties is defined",function() {
        var person = new Person("Tom",21);
        var name = "Tom";
        var age = 21;

        expect(person.name).equal(name);
        expect(person.age).equal(age);

    });

    it("should print about name and age", function () {
        var name = "Tom";
        var age = 21;
        var person = new Person(name,age);

        expect(person.introduce()).equal("My name is Tom. I am 21 years old.");
    });
});