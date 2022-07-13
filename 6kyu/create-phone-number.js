function createPhoneNumber(numbers) {
    if (numbers.length === 10) {
        let first = numbers.slice(0, 3).join('');
        let second = numbers.slice(3, 6).join('');
        let third = numbers.slice(6).join('');

        return `(${first}) ${second}-${third}`
    }
    else return "Quantity of numbers must be equal to 10"
}