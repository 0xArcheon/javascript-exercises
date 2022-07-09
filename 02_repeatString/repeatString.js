const repeatString = function(str , num) {
    if(num<0) {
        return "ERROR";
    }
    else {
        let repeatString = "";
        for(let i = 0; i< num; i++)
        {
        repeatString = repeatString+str;
        }
        return repeatString;
    }
   
}
// Do not edit below this line
module.exports = repeatString;
