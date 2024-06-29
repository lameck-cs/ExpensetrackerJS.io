// JavaScript for basic operations and DOM manipulation

// Declare variables of different data types
const greeting = "Welcome to the Expense Tracker!";
const year = 2024;
const isUserLoggedIn = true;

console.log(greeting); // Output the greeting message
console.log("Current Year:", year); // Output the current year
console.log("User Logged In:", isUserLoggedIn); // Output the login status

// Define functions for basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero.");
        return null;
    }
    return a / b;
}

// Call functions and log results
console.log("Add:", add(5, 3)); // Output: 8
console.log("Subtract:", subtract(5, 3)); // Output: 2
console.log("Multiply:", multiply(5, 3)); // Output: 15
console.log("Divide:", divide(5, 3)); // Output: 1.666...

// DOM Manipulation
document.getElementById('addBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = add(num1, num2);
    document.getElementById('result').textContent = `Sum: ${result}`;
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = subtract(num1, num2);
    document.getElementById('result').textContent = `Difference: ${result}`;
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = multiply(num1, num2);
    document.getElementById('result').textContent = `Product: ${result}`;
});

document.getElementById('divideBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = divide(num1, num2);
    document.getElementById('result').textContent = `Quotient: ${result}`;
});

// Chart.js code to create a line chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Expenses',
            data: [50, 60, 70, 90, 100, 110],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
