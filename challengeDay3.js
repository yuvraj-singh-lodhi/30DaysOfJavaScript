function checkRange(x, y) {
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99);
}

// Example usage:
let num1 = 55;
let num2 = 105;
let result = checkRange(num1, num2);
console.log(result); // Output: true (because 55 is in the range)
