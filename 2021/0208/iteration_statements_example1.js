// 반복문이 없다면?
// 아래와 같이 다섯번의 코드를 일일이 작성해주어야하며 비효율적임.

// console.log('안녕하세요');
// console.log('안녕하세요');
// console.log('안녕하세요');
// console.log('안녕하세요');
// console.log('안녕하세요');

// 반복문을 사용한다면?
// 보통 어떤 유한한 횟수만큼 반복이 필요한 경우 for 문을 사용합니다.

// for (let i = 0; i < 5; i++){
//     console.log('안녕하세요');
// }

// for문의 조건
// for (a - 초기화; b - 반복 조건; c - 반복이 된 후 실행코드){
//    d - 반복이 되는 코드블럭
// }
// e

// 실행순서  a -> d -> c -> b -> d -> c -> b -> e


// 초기화하면서 선언된 변수를 중괄호  안 반복  블럭에서 사용할 수 있습니다.
// for (let i = 0; i < 5; i++) {
//     console.log('안녕하세요', i);
// }

// for (let i = 0, j = 5; i < 5; i++) {
//     console.log('안녕하세요', i, j);
// }

// for (let i = 0, j = 2; i < 5; i++, j = j * j) {
//     console.log('안녕하세요', i, j);
// }

// 반복문을 즉시 종료하고 싶을때는 반복되는 블럭 안에서 break;를 삽입하면 가능합니다.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if(i > 2){
//         break;
//     }
//     console.log('안녕하세요', i)
// }

// 반복되는 블럭 안에서 continue;를 넣는 경우 거기서 해당 블럭은 바로 종료되며 다음 반복이 존재하는 경우  다음 반복으로 넘어갑니다.

// for문은 무한 반복 형태로도 작성할 수 있는데

 for(;;) {
     let randomValue = Math.floor((Math.random() * (45 - 1) + 1 ));
     console.log(randomValue);
     if (randomValue > 0){
         break;
     }
 }

// 이처럼  for문 안에 if문 + break로 종료시키지 않는 이상 계속해서 반복실행됩니다.