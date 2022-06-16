function countSheep(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i + " sheep...");
    }
    return arr.join('');
}
console.log(countSheep(5));