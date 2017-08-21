const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const growingKeys = require('../index').growingKeys;

describe('growingKeys', function() {

  it('should return an object where the keys are the string, concatenating onto itself as many times as the number', () => {
    const growingObj = growingKeys(2,'bella');
    assert.deepEqual(growingObj, {bella: true, bellabella: true});
  });


  it('Should be a function', () => {
    expect(growingKeys).to.be.a('function','growingKeys is not a function');
    assert.isFunction(growingKeys, 'growingKeys is not a function');
  });

  it('Should return a message asking for a number larger than 0', () =>{
    const emptyObj = growingKeys(0,'bella');
    assert.deepEqual(emptyObj, 'Please input a number larger than 0');
  });

  it('Should take a number and a string as arguments', () => {
    const wrongArgs = growingKeys([1,2,3], {shelby:'wrong aruguments'});
    assert.equal(wrongArgs, 'Please make sure your arguments are a number and a string')
  })

});
