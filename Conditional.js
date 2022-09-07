function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

//This function used the multiple tenary operators to check the sign of the number inputed
function checkSign(num) {
    //the brackets around conditional statement is just to make code more readable
    return (num > 0) ? "positive" 
        : (num < 0) ? "negative" 
        : "zero";
}

console.log(checkSign(10));