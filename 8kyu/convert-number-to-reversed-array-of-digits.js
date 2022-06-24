function digitize(n) {
    n = String(n).split('').reverse();
    for (let i = 0; i < n.length; i++) {
        n[i] = Number(n[i]);
    }
    return n;
}