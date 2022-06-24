function isDivisible(n, x, y) {
    if (n > 0 && x > 0 && y > 0) {
        if (n % x === 0 && n % y === 0) {
            return true;
        } else return false;
    } else return "Enter positive numbers"
}