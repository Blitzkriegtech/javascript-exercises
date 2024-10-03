const repeatString = function(str, num) {
    //  if (num < 0) return "";
    //  if (num === 1) return str;
    //  else 
    //      return str + repeatString(str, num -1);
    let rpStr = "";
    for (i = 0; i < num; i++) {
         rpStr += str;
    }
       return rpStr;
};

// Do not edit below this line
module.exports = repeatString;
