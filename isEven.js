//Write a function called "isEven". "isEven" Should return whether 
//it is even or not. Return -1 for invalid input.

function isEven(num) {
   
    if (typeof num !== 'number') {
        return -1; 
    }

    
    return num % 2 === 0;
}
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));