const reverseString = function(ogString) {
    let revString = "";
    for( let i= ogString.length; i>= 0; i--)
    {
        revString = revString + ogString.charAt(i).toLowerCase();
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
