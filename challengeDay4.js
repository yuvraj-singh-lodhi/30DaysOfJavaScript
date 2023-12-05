function calculateTriangleArea(a, b, c) {
    // Heron's formula
    const s = (a + b + c) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

// Example usage:
const side1 = 5;
const side2 = 6;
const side3 = 7;

const triangleArea = calculateTriangleArea(side1, side2, side3);
console.log(`The area of the triangle with sides ${side1}, ${side2}, ${side3} is: ${triangleArea}`);
