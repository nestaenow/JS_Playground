// Variables
// let lunch = "tacos";
// const dinner =  "tamales";
// console.log(dinner);

// Pick a string. Your string can have any number of characters.
// const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
// const ASCII_value = my_string.charCodeAt(0);

// Let us print
// console.log(ASCII_value);

// let x = 1;
// const three = 3;
// const five = 5;
// while(x <= 20){
//     if(x % three === 0 && x % five === 0){
//         console.log('JuliaJames');
//     }else if(x % three === 0){
//         console.log('Julia');
//     }else if(x % five === 0){
//         console.log('James');
//     }else{
//         console.log(x);
//     }
//     x = x + 1;
// }

// let num = 99;

// while (num >=1) {
//     // Last iteration. Note occurances of bottle, bottle, bottleS
//     if (num === 1) {
//         console.log(num + " bottle of juice on the wall! "
//                     + num + " bottle of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     // Second-last iteration. Note occurances of bottleS, bottleS, bottle
//     else if (num === 2){
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottle of juice on the wall!");
//     }
//     // All other iterations. Note occurances of bottleS, bottleS, bottleS
//     else {
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     num = num - 1;
// }

let num = 60;

while(num>=0){
    if (num === 50) {
        console.log('Orbiter transfers from ground to internal power');
    }
    else if (num === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (num === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (num === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (num === 6) {
        console.log("Main engine start");
    }else if (num === 0) {
        console.log('Solid rocket booster ignition and liftoff!');
    }else{
        console.log('T-' + num +' seconds');    
    }

    num = num - 1;
}