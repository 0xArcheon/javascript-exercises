const sumAll = function (start, end) {
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number" ) {
        return "ERROR";
    }
    else {
        sum = 0;
        if (start <= end) {
            for (i = start; i <= end; i++) {
                sum = sum + i;
            }
            return sum;
        }
        else {
            for (i = start; i >= end; i--) {
                sum = sum + i;
            }
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
