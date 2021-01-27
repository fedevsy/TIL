// Null

const a = null;
console.log(a, typeof a);
// null 'object'

// undefined

let b;
console.log(b, typeof b);
// undefined 'undefined'

b = undefined;
console.log(b, typeof b);
// undefined 'undefined'

if (a == b){
    console.log(a == b);
}  // true;

if (a === b){
    console.log(a === b);
}  // false; 