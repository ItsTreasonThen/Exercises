var Year = require('./../B1naryVision/leap');
var chai = require('chai');
var expect = chai.expect;

describe('Leap year', function () {
    it('is not very common', function () {
        var year = new Year(2015);
        expect(year.isLeap()).to.equal(false);
    });

    it('is introduced every 4 years to adjust about a day', function () {
        var year = new Year(2016);
        expect(year.isLeap()).to.equal(true);
    });

    it('is skipped every 100 years to remove an extra day', function () {
        var year = new Year(1900);
        expect(year.isLeap()).to.equal(false);
    });

    it('is reintroduced every 400 years to adjust another day', function () {
        var year = new Year(2000);
        expect(year.isLeap()).to.equal(true);
    });

    it('is not a leap year', function () {
        var year = new Year(1978);
        expect(year.isLeap()).to.equal(false);
    });

    it('is a common leap year', function () {
        var year = new Year(1992);
        expect(year.isLeap()).to.equal(true);
    });

    it('is skipped every 100 years', function () {
        var year = new Year(2100);
        expect(year.isLeap()).to.equal(false);
    });

    it('is reintroduced every 400 years', function () {
        var year = new Year(2400);
        expect(year.isLeap()).to.equal(true);
    });
});