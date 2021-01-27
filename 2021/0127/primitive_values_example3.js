// Number

const a = 37;
console.log(a, typeof a);
// 37 'number'

const b = 96.7;
console.log(b, typeof b);
// 96.7 'number'

const c = NaN;
console.log(c, typeof c);
// NaN 'number'

const d = Number('Mark');
console.log(d, typeof d);
// NaN 'number', Number는 문자열을 숫자로 형변환해주는 내장 객체함수

const e = Number('37');
console.log(e, typeof e);
// 37 'number'
