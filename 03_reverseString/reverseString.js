const reverseString = function(words) {
    const name = words;
    const splitName = name.split('');
    const reverseName = splitName.reverse();
    const result = reverseName.join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
