function squareSum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= numbers[i];
        result += numbers[i];
    }
    return result;
}