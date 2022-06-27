function squareDigits(num) {
    let str = num.toString().split('');
    let str2 = [];
    //console.log(str);
    for (let i = 0; i < str.length; i++) {
        let h = str[i] * str[i];
        str2.push(h);
    }
    //console.log(str2);
    //console.log(str2.join(""));
    return Number(str2.join(""));
}
console.log(squareDigits(3213));
console.log(squareDigits(32139));