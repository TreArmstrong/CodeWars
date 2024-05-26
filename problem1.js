//Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345


function findSmallestInteger(arr) {
    return Math.min(...arr);
}


console.log(findSmallestInteger([34, 15, 88, 2])); 
console.log(findSmallestInteger([34, -345, -1, 100])); 

// Biggest struggle with this problem was the spread operator I knew the method
// Math.min but it wasn't working at first without the ...

