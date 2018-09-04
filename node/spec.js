var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Index = require('./index');
describe('Index', function() {
  it('passes', function() {
    expect(Index(5)).to.equal("buz");
  });
});
