function getSum(a, b) {
    if (a === b) {
        return `${a} (${b} since both are same)`;
    } else if (a > b) {
        return (a + b) * (a - b + 1) / 2;
    } else if (a < b) {
        return (a + b) * (b - a + 1) / 2;
    }
}
console.log(getSum(0, -1));