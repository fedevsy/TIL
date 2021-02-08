// while (조건){
//     조건이 거짓이 될때까지 반복실행
// }

// while (true) {
//     console.log('안녕하세요.');
//     if(Math.random() * 100 > 90){
//         break;
//     }
// }


// do {
//     조건이 거짓이 될때까지 반복실행
// } while (조건)

// do {
//     console.log('안녕하세요.');
// } while (Math.random() * 100 <= 90);


// for of - iterable 객체
for (const i of [1,2,3]){
    console.log(i);
}

// for in - 모든 프로퍼티
Object.prototype.test = function(){};
for (const i in {a:1,b:2,c:3}){
    console.log(i);
}