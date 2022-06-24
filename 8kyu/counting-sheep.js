function countSheeps(arrayOfSheep) {
    let sum = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum += arrayOfSheep[i];
        }
    }
    console.log(`There are ${sum} sheeps in total`);
    return sum;
}