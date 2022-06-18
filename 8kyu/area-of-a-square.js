function squareArea(A) {
    if (A > 0) {
        let side = (2 * A) / Math.PI;
        let area = Math.pow(side, 2);
        return Math.round(area * 100) / 100;
    } else if (A === 0) {
        return 0;
    } else return "Enter number > 0";
}