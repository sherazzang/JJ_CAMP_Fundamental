/*! study.js © yamoo9.net, 2017 */

/**
 *  JavaScript 데이터 유형(Data Types, 자료형)
 *  ES5(2009) - ES6(2015)
 *
 *  - 객체(Object)
 *  - 숫자(Number) 객체
 *  - 문자(String) 객체
 *  - 논리(Boolean) 객체
 *  - 함수(Function) 객체
 *  - 배열(Array) 객체
 *
 *  객체가 아닌 것들
 *  속성을 가지지 않는다.
 *  [ERROR] cannot set property of undefined
 *  [ERROR] cannot get property of null
 *  undefined
 *  null
 */

///////////////////////
// 자바스크립트 데이터 유형
///////////////////////

// 단일 var 패턴: single `var` pattern
// var num, str, boo, fun, arr, obj;

// 단일 var 패턴 <- 값 할당: single `var` pattern <= assign value
// var num=1, str='phone', boo=true, fun=function(){}, arr, obj;

// 사람이 읽기 좋도록(readable) 정렬
var num = 1,
    str = 'phone',
    boo = true,
    fun = function(){},
    arr = [],
    obj = {};

// 웹 브라우저 콘솔 창에서 각 데이터를 형 변환(Change Type) 시켜봅니다.

Boolean( num );   // true
Boolean( 0 );     // false  ::  숫자 중 0의 경우, false. 나머지 숫자는 모두 true 이다.
Boolean( -1000 ); // true
Boolean( str );   // true
Boolean( '' );    // false  ::  문자 중 ''의 경우, false. 나머지 문자는 모두 true 이다.
Boolean( ' ' );   // true   ::  [주의] 사이 공백을 포함한 문자 또한 true.

Boolean( fun );       // true
Boolean( arr );       // true
Boolean( obj );       // true
Boolean( null );      // false
Boolean( undefined ); // false

// 불리언 값으로 변경했을 때, false 인 경우
// 숫자 0
// 빈 문자(공백이 없는) "", ''
// null
// undefined

// ! 부정(반전) 연산자
!true  // false
!false // true
!0     // true
!null  // true

// !! 기호를 데이터 앞에 붙이면
// 해당 데이터는 불리언 값으로 변환된다.
!!num   // true
!!0     // false  ::  숫자 중 0의 경우, false. 나머지 숫자는 모두 true 이다.
!!-1000 // true
!!str   // true
!!''    // false  ::  문자 중 ''의 경우, false. 나머지 문자는 모두 true 이다.
!!' '   // true   ::  [주의] 사이 공백을 포함한 문자 또한 true.

// undefined, null 에 빈 문자열을 더하면
// 문자 값으로 변경된다.
undefined + ''    // "undefined"
null + ''         // "null"

Number(null)      // 0
Number(undefined) // NaN :: Not a Number - "숫자가 아니다"


// is*, has* 이름이 시작하는 함수는 대부분 Boolean 값을 반환한다.
// window.isNaN(데이터); // 숫자 (false) or NaN (true) 반환

!isNaN(num); // ?
// true
!isNaN(str); // ?
// false
!isNaN(boo); // ?
// true
!isNaN(fun); // ?
// false
!isNaN(arr); // ?
// true
!isNaN(obj); // ?
// false


// JavaScript 언어의 이해할 수 없는 결함
!isNaN(false)        // true
!isNaN(true)         // true
!isNaN(function(){}) // false
!isNaN([])           // true
!isNaN([1])          // true
!isNaN([1, 2])       // false
!isNaN({})           // false
!isNaN({a: 1})       // false


// --------------------------------------------
// 함수 정의(선언)  VS  함수 표현식
// --------------------------------------------

// 함수 정의(선언)
// 변수 선언과 비슷. var 키워드를 사용한 후 이름을 기입
// function 키워드를 사용한 후 이름을 기입
// 함수 정의 시에는 이름이 반드시 필요!
function lookAtMe() {}

////////////
// 함수 표현식
////////////
// 이름이 없는 함수 값(함수 리터럴)을 변수에 대입
var callMe = function(){};

// 함수 표현식을 사용하여 변수에 함수 값을 할당
var fn = function(){
  console.log('this is function object. only called object.')
};

// 변수에 참조된 함수 실행
// 함수 이름 뒤에 () 괄호는 실행 연산자
// fn();


// --------------------------------------------
// 함수를 생성하는 3가지 방법
// --------------------------------------------
// 1. 함수 선언문: "자주 사용된다."
function functionDeclaration(){
  console.log('this is functionDeclaration()');
  console.log('this is functionDeclaration()');
  console.log('this is functionDeclaration()');
  console.log('this is functionDeclaration()');
  console.log('this is functionDeclaration()');
}
// 2. 함수 표현식: "자주 사용된다."
var functionExpression = function(){
  console.log('this is functionExpression()');
  console.log('this is functionExpression()');
  console.log('this is functionExpression()');
  console.log('this is functionExpression()');
  console.log('this is functionExpression()');
};
// 3. 함수 생성 (new 사용): 거의 사용되지 않는다.
var createFunction = new Function('console.log("this is createFunction()");console.log("this is createFunction()");console.log("this is createFunction()");console.log("this is createFunction()");console.log("this is createFunction()");console.log("this is createFunction()");');

// --------------------------------------------
// 배열(Array)
// 하나 이상의 값을 가지고 있는 덩어리(모음)
// '값'의 집합. 값을 묶었다.
//
// 객체(Object)
// '속성:값'의 집합.
// --------------------------------------------

// 변수는 하나의 값만 기억할 수 있기 때문에
// 값 하나 하나를 기억하기 위해 변수를 선언(정의)하는 것은
// 매우 비효율적(낭비)이며, 관리하기가 쉽지 않다.
var favorite_item_1 = 'coffee';
var favorite_item_2 = 'macbook';
var favorite_item_3 = 'remote controller';
var favorite_item_4 = 'house';
var favorite_item_5 = 'car';

// 집합을 관리하기 위한 변수(복수) 선언
// 하나 이상의 값들의 모음을 기억하기 위해 배열 데이터 유형을 사용한다.
var favorite_items = [
  'coffee',
  'macbook',
  'remote controller',
  'house',
  'car'
];

// --------------------------------------------------------------
// 값 복사  VS  값 참조
// --------------------------------------------------------------

/////////////////////////
// 값 복사(Pass by Value)
/////////////////////////

// 복사가 이루어지는 데이터 유형 5가지: 숫자,문자,논리,null,undefined
var n1 = 9;
var n2 = n1; // n1에 복사된 숫자 9 값을 n2에 복사한다.
console.log('n1:', n1);
console.log('n2:', n2);

n1 = 9e2; // n1 값은 변경되었다. (기존에 복사된 값은 소멸)
console.log('n1:', n1);
console.log('n2:', n2);

console.log('%c------------------------------------------------------------', 'color: #3d9a21');

/////////////////////////////
// 값 참조(Pass by Reference)
/////////////////////////////

// 참조가 이루어지는 데이터 유형: 참조형 객체(함수,배열,객체)
var arr_o, arr_k;

arr_o = [ 1, 1, 2, 3, 5, 8, 13 ];
arr_k = arr_o; // 복사가 아닌, "참조" 과정이 이루어진다.

console.log('[before] arr_o:', arr_o);
console.log('[before] arr_k:', arr_k);

// arr_k를 통해 참조된 배열 객체에 변형을 가하게 되면
arr_k.push(21);

// 동일한 배열 객체를 참조하고 있는 arr_o 역시 변형된 값을 출력한다.
console.log('[after] arr_o:', arr_o);
console.log('[after] arr_k:', arr_k);

console.log('%c------------------------------------------------------------', 'color: #3d9a21');

// --------------------------------------------
// 배열 데이터를 참조하는 변수 선언과 동시에
// 배열의 원소를 배열 데이터에 추가할 수 있다.
var data_list = [3, 'hey', false, function(){}, [3], {a: 9}];

// 배열이 포함하는 원소(item)에 접근하는 방법은
// 배열 데이터 이름 뒤에 각괄호([])를 넣고, 배열 생성 시,
// 설정된 인덱스(index) 숫자를 넣어주면 값을 빼올 수 있다.
// 해당 인덱스에 기록된 데이터 값을 반환한다.
console.log('data_list[0]:', data_list[0]); // 3
console.log('data_list[1]:', data_list[1]); // 'hey'
console.log('data_list[2]:', data_list[2]); // false
console.log('data_list[3]:', data_list[3]); // function(){}
console.log('data_list[4]:', data_list[4]); // [3]
console.log('data_list[5]:', data_list[5]); // {a: 9}
