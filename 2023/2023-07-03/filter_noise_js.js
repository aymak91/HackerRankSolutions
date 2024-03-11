function getChunks(datastream) {
    // create the array we will return
    let res = [];
  
    // define the regex pattern
    let regexPattern = /(\d\.{2})?\d{2}\.\d{2}\.\d{3}.\d{4}\.\d{2}(\.{2}\d)?/g;
  
    // iterate over all matches of the regex pattern in the string and add them to res
    let match;
    while ((match = regexPattern.exec(datastream)) !== null) {
      res.push(match[0]);
    }
  
    // return all matches
    return res;
  }
  
console.log(getChunks('9..51.28.391.2129.12931048.1230919230.31.203.9123.0192.4019.20129.301.45.4.10....4102391024......12.3.1.1.1.1.12.42.503.4999.32..887239018.132.1..24.51.251.6235.23..4161.23'))