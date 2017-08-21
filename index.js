function growingKeys (num,str) {
  let result = {};
  let key = str;
  for(let i = 0; i < num; i++) {
    result[key] = true;
    key += str;
  }
  return result;
}

module.exports = {
  growingKeys
};
