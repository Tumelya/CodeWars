/*In this exercise, you will create a function that takes an integer, i. 
With it you must do the following:
- Find all of its multiples up to and including 100,
- Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),
- And finally, get the total sum of each new digit sum.
Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) 
then you do NOT have to break it down further until it reaches one digit.
*/

function getSumNumber(num) {
    let sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}

function procedure(n) {
    let arrMultiples = [];
    for (let i = 1; i <= 100; i++) {
        if (i % n === 0) {
            arrMultiples.push(i);
        }
    }
    console.log("This is the array of multiples: " + arrMultiples)
    let arrDigitSum = [];
    for (let i = 0; i < arrMultiples.length; i++) {
        arrDigitSum.push(getSumNumber(arrMultiples[i]));
    }
    console.log("This is the array of digit sum: " + arrDigitSum)
    let finalSum = 0;
    for (let i = 0; i < arrDigitSum.length; i++) {
        finalSum += arrDigitSum[i];
    }
    console.log("This is the final sum = " + finalSum);
    return finalSum;
}