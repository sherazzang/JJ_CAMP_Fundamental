/*! js-core.js © yamoo9.net, 2017 */

///////////
// Array //
///////////

// 하나 이상의 값을 묶은 데이터 유형.
// 자바스크립트를 잘 하려면? 배열을 정복해야 한다.
// 배열은 값의 집합. 배열은 값들이 순서(index)를 가진다.
// 배열의 원소(값)는 인덱스가 0부터 시작한다.
// 고로 가장 마지막 원소는 배열 원소 총 개수 - 1이 된다.

// 배열 데이터 정의
var employees = [];

// 배열 데이터에 원소 추가
// .push() 능력(Method, 메서드)을 사용
employees.push('김민기');
employees.push('이현민');
employees.push('정대만');
employees.push('서태웅');

// 배열 데이터 employees를 콘솔에서 확인
// console.log('employees:', employees);

// 배열 데이터 employees의 총 원소 개수
// console.log('employees.length:', employees.length); // 4

// 배열 데이터 employees에 새로운 원소(item) 추가
employees.push('설민석');

// 자동 업데이트 된 배열 데이터 employees의 총 원소 개수
// console.log('employees.length:', employees.length); // 5

// 배열 데이터 employees의 각 원소(item)을 출력
// [0]
// console.log('employees[0]:', employees[0]);
// [1]
// console.log('employees[1]:', employees[1]);
// [2]
// console.log('employees[2]:', employees[2]);
// [3]
// console.log('employees[3]:', employees[3]);
// 자동으로 업데이트 되는 employees.length - 2 는 항상 배열의 마지막에서 2번째 원소를 가리키게 된다.
// console.log('employees[employees.length - 2]:', employees[employees.length - 2]);
// [4]
// console.log('employees[4]:', employees[4]);
// 자동으로 업데이트 되는 employees.length - 1 은 항상 배열의 마지막(1번째) 원소를 가리키게 된다.
// console.log('employees[employees.length - 1]:', employees[employees.length - 1]);
// [5] 숫자 상수 값을 변수로 변경하면 employees.length 와 같다.
// console.log('employees[5]:', employees[5]); // undefined
// console.log('employees[employees.length]:', employees[employees.length]);

// Create JavaScript Array Type
// 주의할 점!
// new Array() 방식은 사용하지 않는 것이 좋다.
// [] 배열 리터럴 방식을 사용하는 것을 권장한다.


////////////
// Object //
////////////

// 권장하지 않는 객체 생성 방법
// new Object();

// 권장하는 객체 생성 방법
// {}

// JavaScript 메모리 관리는 가비지 컬렉터(쓰레기 수집)가 한다.
// 가비지 컬렉터에 의해 메모리에서 삭제되지 않으려면 변수에 참조(기억)시켜야 한다.
var student = {}; // 학생을 의미하는 새로운 객체 생성 (변수에 메모리)

// 객체의 속성이라는 것은...
// 변수인데 객체가 포함하면 그것은 객체의 속성이 된다.

// 변수
// var name = '';

// 객체.속성
student.name       = '고우리';
student.age        = 21;
student.university = '한강대학교';

// console.log('student:', student);

// 배열, 객체를 사용하여 클래스(학급)를 추상화
// 사용 가능한 데이터 화

// 학급 = [학생, 학생, 학생, 학생]
// 학생 = {이름:'', 나이:'', 전공:'', '학년':''}

// 이름(name)
// 나이(age)
// 전공(major)
// 학년(grade)

var jaremy, shara, jain, climbing_club;

jaremy           = {};
jaremy.name      = 'Jaremy';
jaremy.age       = 18;
jaremy.major     = 'Math';
jaremy.grade     = 'high school 3';
jaremy.graduated = false;

shara = {
  name      : 'Shara',
  age       : 24,
  major     : 'Cooking',
  grade     : 'University 4',
  graduated : false
};

jain = {
  // key: value 쌍으로 구성된 데이터 = 객체
  // 명사 형태의 속성은 모두 properties
  'name'           : 'Jain',
  'age'            : 32,
  'major'          : 'Ancient History',
  'grade'          : 'graduated',
  'favorite_items' : ['bag', 'drink coffee', 'travel'],
  'graduated'      : true,
  // 동사(실행, 함수 데이터 참조) 형태의 속성은 특별하게 메서드(method)라고 부른다.
  'driving'        : function() {},
  'running'        : function() {},
  'reading'        : function() {}
};

climbing_club = [
  // value 로만 구성된 집합 = 배열
  jain,
  jaremy,
  shara
];

// console.log(climbing_club);


///////////////////////
// 객체 속성에 접근하는 방법
///////////////////////

// 1. 객체.속성, 점 표기법
// console.log( jaremy.major );
// console.log( jain.age );

// 2. 객체['속성'], 각괄호 표기법
// console.log( jaremy['major'] );
// console.log( jain['age'] );

// CSS Map
// 각괄호 표기법을 사용해야만 아래 속성에 접근이 가능하다.
var container_cssmap = {
  'max-width'    : '1080px',
  'min-height'   : '100vh',
  'margin-left'  : 'auto',
  'margin-right' : 'auto'
};

// 객체의 속성을 지울 경우는 delete 키워드를 사용한다.

console.log('jain.driving - 지우기 전:', jain.driving);

delete jain.driving;

console.log('jain.driving - 지운 후:', jain.driving);


// JSON 이란?
// 클라이언트 <-> 서버, 데이터를 주고 받을 때 사용하는 포멧
// 객체와 배열로 구성된 데이터이다. (서버에 전송할 때는 문자화해야 한다)
// Server 전송 받는 데이터 JSON, XML
// https://api.myjson.com/bins/otssr


// typeof 는 키워드이며, 함수가 아니다.
// 괄호 ()를 사용하는 이유는 다음과 같다.

var y, x;

x = 10;

y = x * x - 7; // 93

typeof x        // "number"
typeof y        // "number"
typeof x + ''   // "number"
typeof (x + '') // "string" <----




// typeof 의 치명적 설계 오류!!
// typeof 사용 시, 데이터 값 반환은 문자열로(소문자로만)

typeof 9               // "number"
typeof ''              // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof function fn(){} // "function"
typeof {}              // "object"
typeof [1, 2, 3, 4]    // "object"    <---
typeof null            // "object"    <---

// 붕어빵 틀: 원형 객체(Symbol)
// 붕어빵:   인스턴스(조각, 실체화, 구현화)


// 실체 구현된 객체 (생성자로부터 만들어진 존재하는 객체이다)
// [1, 2, 3, 4]

// 생성과정
// Array는 생성자 (객체를 생성할 수 있는 존재)   e.g) 붕어빵 틀
// numbers 변수에 참조된 객체는 실제 구현된 객체  e.g) 붕어빵
var numbers = new Array();
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);

// typeof
typeof numbers;           // 'object' [X]
numbers instanceof Array; // true [O]



// 사실 아래 결과는 올바른 것이지만,
// 일반적인 인식에서는 오류처럼 보일 수 있다.
// 이 점에 instanceof를 사용할 때 주의할 점이다.
1098 instanceof Number;             // false
new Number(1098) instanceof Number; // true

// 생성자(constructor)
// 자바스크립트 모든 객체는 반드시 이 속성을 가진다.
// 객체.constructor
// 이 속성은 객체의 생성자를 반환한다.

// 자바스크립트 데이터 유형 변수에 할당
var num = 102,         // 숫자 값으로 실제 객체는 아니지만... 자바스크립트가 객체처럼 처리한다.
    str = 'hi, there', // 문자 값으로 ⬆︎ 상동 ..
    boo = false,       // 논리 값으로 ⬆︎ 상동 ..
    fun = function() {},
    arr = [],
    obj = {};

console.log('num.constructor:', num.constructor === Number);   // Number
console.log('str.constructor:', str.constructor === String);   // String
console.log('boo.constructor:', boo.constructor === Boolean);  // Boolean
console.log('fun.constructor:', fun.constructor === Function); // Function
console.log('arr.constructor:', arr.constructor === Array);    // Array
console.log('obj.constructor:', obj.constructor === Object);   // Object

// constructor 속성은 모든 객체에 정확한 생성자를 반환하여 알려줌으로 문제가 없다.
// 단, 이것은 어디까지나 객체에 국한된다.


// JavaScript에서 제공하는 데이터 유형을 감지하는 3가지 방법은 모두 완벽하지 않다.
// 이 문제로 JavaScript 코드로 구성된 프로그래밍은 오류를 발생할 확률을 가진다.
// 프로그래머라면 사전에 문제가 발생하지 않도록 설정하는 것이 기본 자질이다.


// JavaScript 모든 데이터를 100% 완벽하게 검증할 수 있는 함수를 만들자!
// 헬퍼 함수(사용자 정의 함수), 유틸리티 함수

// 함수 선언문
function checkDataType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}

// [Helper] wrapper functions
function isNumber(data) {
  return checkDataType(data) === 'number';
}
function isString(data) {
  return checkDataType(data) === 'string';
}
function isBoolean(data) {
  return checkDataType(data) === 'boolean';
}
function isFunction(data) {
  return checkDataType(data) === 'function';
}
function isArray(data) {
  return checkDataType(data) === 'array';
}
function isObject(data) {
  return checkDataType(data) === 'object';
}
function isNull(data) {
  return checkDataType(data) === 'null';
}
function isUndefined(data) {
  return checkDataType(data) === 'undefined';
}

// 함수 사용 방법
// 결과 값을 반환하는 함수, 반환하지 않는 함수
checkDataType(900);       // 'number'
checkDataType(null);      // 'null'
checkDataType([1, 4, 8]); // 'array'

// 함수 표현식
var detactDataType = function() {};
