function stairsIn20(stairs) {
    //stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];
    let result = 0;
    for (let i = 0; i < stairs.length; i++) {
        for (let j = 0; j < stairs[i].length; j++) {
            result += stairs[i][j];
        }
    }
    return result * 20;
}