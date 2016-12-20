const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;

describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  //Add more tests here:
});

describe('filter tests', ()=>{
	it('filterEvens() should take in an array of random numbers and only return array with even nums', () => {
		var result1 = filterEvens([1,2,3,4,5,6]);
		var result2 = filterEvens([-1,-2,-3,-4,-5,-6]);
		var result3 = filterEvens([-3,-1,1,3]);
		expect(result1).eql([2,4,6]);
		expect(result2).eql([-2,-4,-6]);
		expect(result3).eql([]);
	})
})
