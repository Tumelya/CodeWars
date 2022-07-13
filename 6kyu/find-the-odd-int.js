function findOdd(A) {
    const countItems = A.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    const result = Object.keys(countItems).filter((item) => countItems[item] % 2 != 0);
    return result * 1;
}