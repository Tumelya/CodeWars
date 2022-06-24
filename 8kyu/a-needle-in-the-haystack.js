function findNeedle(haystack) {
    let position = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}