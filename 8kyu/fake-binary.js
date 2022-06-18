function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            result = result.concat(0);
        } else result = result.concat(1);
    }
    return result;
}