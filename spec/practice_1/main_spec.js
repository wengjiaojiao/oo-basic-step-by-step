"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    it("写一个类-1", function(){
        sinon.spy(console, 'log');

        require("../../src/practice_1")
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '下面是部分学生的成绩详情\n沙龙逸\t语文124 数学148 英语137\n刘钰婷\t语文115 数学139 英语135\n韩林霖\t语文127 数学139 英语142\n平均成绩\t语文122 数学142 英语138';
        
        expect(expect_string).to.equal(result);
    });
});