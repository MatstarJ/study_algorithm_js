
/**
 * 재귀함수 기본 요소
 * 1. 라인을 끝내는 종료 요건이 있어야한다.
 * 2. 매번 다른 입력값 
 */


// 가장 기초적인 재귀함수
function countDown(num) {
  if (num <= 0) {
    //종료조건
    console.log('All Done!');
    return;
  }

  console.log(num);
  //매번 다른 입력값
  num--
  countDown(num);
}

countDown(5);


//------------------------------------------------------------------------------



function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/**
 * -----> 함수 실행
 * sumRange(3)
 *  return 3 + sumRange(2)
 *                return 2 + sumRange(1)
 *                              return 1
 *                              <------ 값의 계산
 */


//------------------------------------------------------------------------------


//팩토리얼
// ex 4! = 4x3x2x1

//반복문 (비 재귀적) 
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

factorial1(5);


//재귀함수
function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}


factorial2(5);

//------------------------------------------------------------------------------





// 헬퍼 메소드 재귀
// 외부 메서드안에 재귀함수가 있는 형태

function outer(input) {

  let outerScopedVariable = []

  function helper(helperInput) {

    helper(helperInput--);
  }

  helper(input)

  return outerScopedVariable;
}




function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//------------------------------------------------------------------------------

//순수 재귀
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

collectOddValues([1, 2, 3, 4, 5])
  // [1].concat(collectOddValues([2,3,4,5]))
//                       [].concat(collectOddValues([3,4,5]))
//                                      [3].concat(collectOddValues([4,5])
//                                                      [].concat(collectOddValues([5])
//                                                                        [5].concat(collectOddValues([]) = [5]
//                                                                                         <<------------- 
