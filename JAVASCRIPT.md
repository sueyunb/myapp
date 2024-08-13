# Javascript 기본

```

// 얼럿을 만들어보자!
alert('얼럿입니다!');

// 브라우저에서 콘솔을 확인해보자!
console.log('콘솔입니다.');

// 함수 만들기 //

function myFunc () {
    // 함수 기능
}

const myFunc = () => {
    // 함수 기능
}

// 변수 //

const, let, var

const -  변수의 값을 바꿀 수 없음

let -  변수의 값을 바꿀 수 있음

var - 변수의 값을 스코프를 넘어 자유롭게 변경 할 수 있음

// 자료형
string, number, object, array, boolean, null, undefined

// 문자열
const name = 'Jacob';

// 숫자
const age = 29;

// 객체
const user = {
    name: 'Jacob',
    age: 29
};

// 배열
const getUserName = ['Jacob', 'Minchul'];

const getAge = [29, 40];

const getAllUser = [
    {
        name: 'Jacob',
        age: 29
    },
    {
        name: 'MinChul',
        age: 40
    }
];


// Boolean 참 / 거짓
const isStudent = false;
const isHandsome = true;



// 정의 되지 않았다!

null - 초기값 / 데이터가 아직 들어오기전

undefined - 정의 자체가 되지 않았다. (80% 오류)


// type 확인해보기
const isStudent: 'false';
const isHandsome: true;

console.log(typeof [변수명]);

// string 과 number의 차이
const age = '18';
const age2 = 18;

const newAge = '1';
const newAge2 = 1;

console.log(age + newAge);
console.log(age2 + newAge2);

// type 바꾸기
const age = 18;
const isStudent = 'true';

console.log(Number(age));

console.log(age.toString());

console.log(Boolean(isStudent));

// 연산

덧셈 연산자: +
곱셈 연산지: *
나눗셈 연산자: /
나머지 연산자: %
거듭제곱 연산자: **


```
