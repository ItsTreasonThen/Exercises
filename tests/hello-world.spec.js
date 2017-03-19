var HelloWorld = require('./../B1naryVision/hello-world');
var chai = require('chai');
var expect = chai.expect;

describe('Hello World', function () {
    var helloWorld = new HelloWorld();

    it('says hello world with no name', function () {
        expect(helloWorld.hello('')).to.equal('Hello, World!');
    });

    it('says hello to bob', function () {
        expect(helloWorld.hello('Bob')).to.equal('Hello, Bob!');
    });

    it('says hello to sally', function () {
        expect(helloWorld.hello('Sally')).to.equal('Hello, Sally!');
    });
});