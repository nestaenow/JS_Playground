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
let x = 1;
const three = 3;
const five = 5;
while(x <= 20){
    if(x % three === 0 && x % five === 0){
        console.log('JuliaJames');
    }else if(x % three === 0){
        console.log('Julia');
    }else if(x % five === 0){
        console.log('James');
    }else{
        console.log(x);
    }
    x = x + 1;
}