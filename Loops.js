//Trying the long way to display a series of numbers
// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

//The above could be made easier by using a while loop
// let number = 0;
// while (number <= 12){
//     console.log(number);
//     number += 2;
// }

//for a more useful code we'll use
// let result = 1, counter = 0;
// while (counter < 10){
//     result *= 2;
//     counter += 1;
// }
// console.log(result);

//doWhile loop
// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);

// console.log(yourName);

//forLoop
for (let i = 0; i <= 12; i += 2) {
    console.log(i);
}

let result = 1;
for (let counter = 0; counter < 10; counter++) {
    result *= 2;
}
console.log(result);

for (let current = 20; ; current++) {
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}