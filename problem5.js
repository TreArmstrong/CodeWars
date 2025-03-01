// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.



function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}


console.log(basicOperation('+', 5, 3)); 
console.log(basicOperation('-', 10, 4)); 
console.log(basicOperation('*', 6, 2)); 
console.log(basicOperation('/', 15, 3)); 


// This problem was very logic based and made the most sense out of all
