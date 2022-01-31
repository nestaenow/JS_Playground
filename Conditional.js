let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("Hey. Why didn't you give me a number?");
// }

//multiple if-else statements
if (theNumber < 10){
    console.log("Small");
} else if (theNumber < 100){
    console.log("Medium");
} else if(theNumber < 1000){
    console.log("Large");
}else {
    console.log("X-large");
}