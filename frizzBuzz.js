for(let number = 1; number <= 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
        console.log('FizzBuzz');
        continue;
    } 
    else if (number % 5 == 0){
        console.log('Buzz');
        continue;
    }
    else if(number % 3 == 0){
        console.log('Fizz');
        continue;
    }
    console.log(number);
}