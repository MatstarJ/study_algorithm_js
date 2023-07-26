
/**
 * 
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. 
 * This function should mimic the functionality of Math.pow() 
 *  - do not worry about negative bases and exponents
 * 
 * ex
 * power(2,0) // 1
 * power(2,2) // 4
 * power(2,4) // 16
 * 
 */


//반복문
function power1(base, exponent) {

  if (exponent == 0)
    return 1

  let result = base;

  for (let i = 1; i < exponent; i++) {
    result = result * base;
  }

  return result;

}


//재귀 함수 
function power2(base, exponent) {

  if (exponent == 0)
    return 1

  let result = base;

  function helper(exponent) {
    if (exponent == 1)
      return result;
    else
      result = result * base;
    helper(exponent - 1);
  }

  helper(exponent);

  return result;

}

console.log(power1(2, 8));
console.log(power2(2, 8));