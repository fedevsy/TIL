// 조건 ? 조건이 참일때 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능합니다.

let n = 5;
console.log(n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.');

// 표현식의 결과를 변수에 할당할 수 있습니다.

const message = n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.';
console.log(message);