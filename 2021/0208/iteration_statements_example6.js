//new Function을 통해 선언된 함수는 변수 데이터를 전역 변수에서 가져오며 익명함수 형식으로 선언된 함수의 경우 지역 변수 데이터를 가져온다.

global.a = 0; // return a = 0

{
    const a = 1;
    const test = new Function('return a');
    console.log(test());
}

{
    const a = 2;
    const test = function(){
        return a;
    }
    console.log(test());
}