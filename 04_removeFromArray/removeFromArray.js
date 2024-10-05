const removeFromArray = function(array, ...args) {
//  *Solution 1
// return array.filter(val != args.includes(val));

// *Solution 2
    for (let i = 0; i < array.length; i++)
    {
        if (args.includes(array[i])) 
            {
                array.splice(i, 1);
                i--;
            }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
