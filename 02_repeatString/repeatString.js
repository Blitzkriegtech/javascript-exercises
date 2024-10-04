const repeatString = function(str, num) {

    //* Solution 1
    //  if (num === 0) return "";
    //  if (num < 0) return "ERROR";
    //  if (num === 1) return str;
    //  else 
    //      return str + repeatString(str, num -1);

    //* Solution 2s
    if (num < 0) 
        return "ERROR";
    
    let rpStr = "";
    for (i = 0; i < num; i++) {
        rpStr += str;
    }
    return rpStr;
    
       
};

// Do not edit below this line
module.exports = repeatString;
