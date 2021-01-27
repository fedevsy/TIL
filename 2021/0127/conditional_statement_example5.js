// if () {} else if () {} else {}

const n = 15;

if (n % 3 === 0) {
    console.log('n은 3의 배수입니다.');
} else if (n % 5 === 0) {
    console.log('n은 5의 배수입니다.');
} else {
    console.log('n은 3의 배수도 아니고 5의 배수도 아닙니다.');
}


// n이 3의 배수이면서, 5의 배수이면 어떻게 출력할까요? ( Feat.최소공배수 )

if (n % 3 === 0 && n % 5 === 0) {
    console.log('n은 15의 배수입니다.');
}else if (n % 3 === 0) {
    console.log('n은 3의 배수입니다.');
}else if (n % 5 === 0) {
    console.log('n은 5의 배수입니다.');
}else{
    console.log('n은 3의 배수도 아니고 5의 배수도 아닙니다.');
}


// n % 3 === 0 과 n % 5 === 0 의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.

const multifleOfThree = (n % 3 === 0);
const multifleOfFive = (n % 5 === 0);

if (multifleOfThree && multifleOfFive) {
    console.log('n은 15의 배수입니다.');
}else if (multifleOfThree) {
    console.log('n은 3의 배수입니다.');
}else if (multifleOfFive) {
    console.log('n은 5의 배수입니다.');
}else{
    console.log('n은 3의 배수도 아니고 5의 배수도 아닙니다.');
}


// 중첩을 이용하여 표현할수도 있습니다.

if (multifleOfThree && multifleOfFive) {
    console.log('n은 15의 배수입니다.');
}else{
    if (multifleOfThree) {
        console.log('n은 3의 배수입니다.');
    }else if (multifleOfFive) {
        console.log('n은 5의 배수입니다.');
    }else{
        console.log('n은 3의 배수도 아니고 5의 배수도 아닙니다.');
    }
}