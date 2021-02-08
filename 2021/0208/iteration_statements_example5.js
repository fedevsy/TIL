
// new Function(/* 인자1, 인자2, ..., 'return a + b + c')

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1,2,3));
