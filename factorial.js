// source https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38
let factorial = function(num) {
    // factorial of zero and one is 1
    if(num === 0 || num === 1) {
        return 1;
    }
    
    // start the loop as one less than the number supplied
    // decrement the loop counter after each iteration
    // continue until the counter reaches 1
    for (let i = num - 1; i >= 1; i--) {
        num *=i;
    }
    return num;
}