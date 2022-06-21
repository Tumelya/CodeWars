function compareNumbers(a, b) {
    return a - b;
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr);
    return [...uniqSet];
}

function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let arr3 = arr.sort(compareNumbers);
    return makeUniq(arr3);
}