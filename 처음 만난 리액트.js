// 웹사이트의 뼈대를 구성하는 태그들
<html>
    <head>
    </head>
    <body>
    </body>
</html>

// JavaScript의 문법

// 1. 자료형 - 동적 타이핑 : 변수에 데이터가 대입되는 시점에 해당 변수의 자료형 결정
// var, let 사용
// Number type
let n1 = 1234;
let n2 = 5.678;

// String type, 두 종류 사용x
let s1 = "hello";
let s2 = 'world';

// Boolean type
let b1 = true;
let b2 = false;

//Null type : 정의 되었지만 값이 null
let n = null;

// Undefined type : 정의가 되지 않은 것
let u1;
let u2 = undefined;

// Array type, 다양한 자료형 함께 쓸 수 있음
let arr = [1, 2, 3, 4];

// Object type : 객체를 다루기 위한 자료형, 딕셔너리 유사, {key: value}
let obj1 = { a: "apple", b: "banana", c: "carrot"};
// 값으로 Number 타입만을 사용한 객체
let obj2 = { a: 1, b:2, c: 2};
// 값으로 다양항 자료형들을 함께 사용한 객체
let obj3 = {a: "hello", b: 100, c: [1, 2, 3, 4]};
// 값으로 객체를 사용한 객체
let obj4 = {
    a: { a1: 1, a2: 2},
    b: { b1: 3, b2: 4},
    c: { c1: 5, c2: 6},
};
console.log(obj1['a']) // apple
console.log(obj2.a) // 1
console.log(obj3['c']) // [1, 2, 3, 4]
console.log(obj4.c.c2) // 6

// 2. 연산자
// 사칙 연산자 + %, ** = 산술연산자
console.log(i / k);  // 0.5 , 나눗셈
console.log(i % k);  // 2 , 나머지
console.log(i ** k); // 16 , 지수
// 증가 연산자, 감소 연산자
// postfix 방식 : a++  (2,1)
let a = 1;
let b = a++;
// prefix 방식 : ++a    (2,2)
let c = 1;
let d = ++a;
// 조건부 연산자(Conditional operator), 삼항 연산자(Ternary operator) : 조건에 따라 결과가 2개로 나누어 질 수 있음 
// 조건식 ? true일 경우 : false일 경우
let j = true;
let h = false;
console.log(j ? 1 : 2); // 1
console.log(h ? 1 : 2); // 2

// 3. ㅎㅏㅁㅅㅜ
// function statement
function sum(a, b){
    return a + b;
}
console.log(sum(10, 20));
//arrow function expression
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(10, 20));