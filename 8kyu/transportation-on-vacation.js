function rentalCarCost(d) {
    if (d >= 7) {
        return 40 * d - 50;
    } else if (d >= 3) {
        return 40 * d - 20;
    } else if (d >= 1) {
        return d * 40;
    } else return 0;
}