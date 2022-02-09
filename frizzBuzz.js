for(let number = 1; number <= 100; number++){
    if(number % 3 == 0){
        console.log('Fizz');
        continue;
    } 
    else if (number % 5 == 0){
        console.log('Buzz');
    }
    console.log(number);
}