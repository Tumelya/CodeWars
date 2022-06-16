var min = function (list) {
    let minNum = list[0];
    list.forEach(function (e) {
        if (e < minNum) minNum = e;
    });
    return minNum;
}

var max = function (list) {
    let maxNum = list[0];
    list.forEach(function (e) {
        if (e > maxNum) maxNum = e;
    });
    return maxNum;
}