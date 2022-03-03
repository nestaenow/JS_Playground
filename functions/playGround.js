// const square = function(x) {
// const square = (x) => {
//     return x * x;
// };

// console.log(square(12));

// const makeNoise = function() {
//     console.log('Pling!');
// }

// makeNoise();

// const power = function(base, exponent){
//     let result = 1;
//     for(let i = 0; i < exponent; i++){
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2, 10));

// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
// }

// console.log(x + z);

//Arrow Function
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2,10));
// const square1 = (x) => {
//     return x * x;
// };
// const square2 = x => x * x;
// console.log(square1(4));
// console.log(square2(4));

// function square1(x) { return x * x; }
// console.log(square1(4, true, 'hedgehog'));
// function minus(a, b) {
// if (b === undefined) return -a;
// else return a - b;
// }
// console.log(minus(10));

// console.log(minus(10, 5));
// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//     return number => number * factor;
// }

// let twice = multiplier(2);
// let thrice = multiplier(3);
// console.log(twice(5));
// console.log(thrice(5));

//Recursion
// function power(base, exponent) {
//     if (exponent == 0){
//         return 1;
//     } else {
//         console.log(base + 'a');
//         console.log(exponent + 'b');
//         return base * power(base, exponent - 1);
//     }
// }

// console.log(power(3, 3));
// //recursion over loop better example
// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         }else if (current > target){
//             return null;
//         }else {
//             return find(current + 5, `(${history} + 5)`) || 
//             find(current * 3, `(${history} * 3)`); 
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(13));

//Growing Functions
// function printFarmInventory(cows, chickens){
//     let cowString = String(cows);
//     while(cowString.length < 3){
//         cowString = '0' + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while(chickenString.length < 3){
//         chickenString = '0' + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }

// printFarmInventory(12, 6);

//The above fuction can be better written as such
// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while(numberString.length < 3){
//         numberString = '0' + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, 'Cows');
//     printZeroPaddedWithLabel(chickens, 'Chickens');
//     printZeroPaddedWithLabel(pigs, 'Pigs');
// }

// printFarmInventory(7, 11, 3);

//An even better way to write this fucntions to make it more versatile
//is as follows;
// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = '0' + string;
//     }
//     return string;
// }
// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// printFarmInventory(7, 16, 3);

const min = (a,b) => {
    if(a > b)
        return b;
    else
        return a;
}
let x = Number(prompt('NUM1: '));
let y = Number(prompt('NUM2: '));
console.log(min(x, y)); 