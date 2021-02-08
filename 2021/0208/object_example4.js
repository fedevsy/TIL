
// prototype 프로토타입 체인
// 모든 객체들을 연결하여 표현하는 것.

const a = new Object();
console.log(a, typeof a);


const b = new Object(true);
console.log(b, typeof b);


const c = new Object({ name : 'Mark'});
console.log(c, typeof c);