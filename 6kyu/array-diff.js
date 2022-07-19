function arrayDiff(a, b) {
    let result = a;
    for (let i = 0; i < b.length; i++) {
        result = result.filter(el => el !== b[i])
    }
    return result;
}