function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c, (a + c) * b, a * b + c, a + b * c, a * c + b);
}
console.log(expressionMatter(1, 3, 1));