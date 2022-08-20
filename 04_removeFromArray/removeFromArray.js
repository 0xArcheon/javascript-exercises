const removeFromArray = function(givenArr, ...delItem) {
        let deletedArr = givenArr.filter((e) => !delItem.includes(e));
        return deletedArr;
};


// Do not edit below this line
module.exports = removeFromArray;
