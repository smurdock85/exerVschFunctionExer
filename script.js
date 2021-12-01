function function1(n1, n2) {
    return n1 + n2;
  }
  
  
  function function2(n1, n2, n3) {
    var largest = n1;
    if (n2 > largest){
      largest = n2;
    }
    if (n3 > largest){
      largest = n3;
    }
    return largest;
  }
  
  
  function function3(n) {
    var toReturn = "odd";
    if (n % 2 === 0) {
        toReturn = "even";
    }
    return toReturn;
  }