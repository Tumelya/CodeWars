function XO(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            countX++;
        } else if (str[i] === "o" || str[i] === "O") {
            countO++;
        }
    }
    if (countX === countO) {
        return true;
    } else return false;
}
console.log(XO("xxOo"));