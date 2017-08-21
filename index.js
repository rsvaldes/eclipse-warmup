function growingKeys (num,str) {
  let result = {};
  let key = str;

  if (num === 0) {
    return 'Please input a number larger than 0';
  }

  if(typeof num !== 'number' || typeof str !== 'string') {
    return 'Please make sure your arguments are a number and a string'
  }

  for(let i = 0; i < num; i++) {
    result[key] = true;
    key += str;
  }
  return result;
}

module.exports = {
  growingKeys
};
