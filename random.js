function randomFraction() {
    //returns random decimal number between 0 and 1
    return Math.random();
}
 
function randomWholeNum() {
    //returns random whole numbers between 0 and 9
    return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
    //returns a random whole number between myMin and myMax
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
randomFraction()