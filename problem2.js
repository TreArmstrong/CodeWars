// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



function countSheep(num) {
    let murmur = '';
    for (let i = 1; i <= num; i++) {
        murmur += i + ' sheep...';
    }
    return murmur;
}


console.log(countSheep(3)); 

// Really struggled with this problem I knew a for loop would help
// but I had to look up the syntax I forgot.
