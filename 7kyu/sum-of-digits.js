function sum(digits) {
    if (digits === undefined) { return '' }
    digits = String(digits);
    let result = [];
    let digitSum = 0;
    for (let i = 0; i < digits.length; i++) {
        result.push(digits[i]);
        digitSum += Number(digits[i]);
    }
    result = result.join(" + ");
    console.log(result, digitSum);
    return `${result} = ${digitSum}`;

}