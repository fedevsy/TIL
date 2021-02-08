// () => {} arrow function(ES6)

// arrow 함수를 만들어 이름이 hello1인 변수에 할당

const hello1 = () => {
    console.log('hello1');
};

// 함수의 매개변수
// 함수를 호출할때 값을 지정

const hello2 = name => {
    console.log('hello2', name);
}

// 함수의 리턴
// 함수를 실행했을때 얻어지는 값

const hello3 = (name, age) => `안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살입니다.`;

console.log(hello3('이승연',30));