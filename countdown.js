function countdown(n){
  if (n < 1) {
    return [];
  }else{
    //returns an array with a countdown from 'n'
    const arr = countdown(n - 1);
    //unshist adds elements at the start of an array
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(10));