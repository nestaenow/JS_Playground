function countdown(n){
  if (n < 1) {
    return [];
  }else{
    let countArray;
    countArray.push(n);
    countdown(n-1);
    return countArray;
  }
}