// Boolean

const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);
// true 'boolean'
// false 'boolean'

const a = new Boolean(false);
console.log(a, typeof a);
// [Boolean: false] object

if(a){
    console.log('false?');
}// false?

const b = Boolean(false);
console.log(b,typeof b);
// false 'boolean'

if(b){
    console.log('false?');
}// 출력되지 않음.