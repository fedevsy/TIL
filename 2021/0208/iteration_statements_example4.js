
// const hello = function(){}
// function(){} 형태의 익명 함수를 만들어 변수에다 함수를 할당하는 방식도 있다.

// 이름이 hello1인 함수를 선언

const hello1 = function(){
    console.log('hello1');
}

console.log('hello1', typeof hello1);

// 함수의 매개변수
// 함수를 호출할때 값을 지정

const hello2 = function(name){
    console.log('hello2', name);
}

// 함수의 리턴
// 함수를 실행했을때 얻어지는 값

const hello3 = function(name){
    return `hello3 ${name}`;
}

console.log(hello3('Mark'));