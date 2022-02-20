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
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
let thrice = multiplier(3);
console.log(twice(5));
console.log(thrice(5));
//