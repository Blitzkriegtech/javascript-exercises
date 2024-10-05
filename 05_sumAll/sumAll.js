const sumAll = function(num1, num2) 
{
    // *Solution 1
    
//     let min = Math.min(num1, num2);
//     let max = Math.max(num1, num2);

//     if (Array.isArray(num1)|| Array.isArray(num2)) {
//         return "ERROR"
//     }

//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//         return "ERROR"
//     }

//     if (!Number.isInteger(min) || !Number.isInteger(max)) {
//         return "ERROR"
//     }

//     let sum = 0;
// for (i = min; i <= max; i++) 
//         {
//             if (min < 0) 
//             {
//                 return "ERROR"
//             } else if (max < 0)
            
//             {
//                 return "ERROR"           

//             } else
            
//             {
//                 sum += i;
//             }
            
//         }
//     return sum;

    // *Solution 2
    switch (true) {
        case (Array.isArray(num1)||Array.isArray(num2)):
            return "ERROR";
            break;
        case (typeof num1 !== "number"||typeof num2 !== "number"):
            return "ERROR";
            break;
        case (!Number.isInteger(num1)||!Number.isInteger(num2)):
            return "ERROR";
            break;
    }

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let sum = 0;

    for (let i = min; i <= max; i++){
       if (min < 0 || max < 0) {
        return "ERROR"
       } else 
       sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
