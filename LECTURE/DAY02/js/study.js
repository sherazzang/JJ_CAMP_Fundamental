/*! study.js © yamoo9.net, 2017 */

/**
 *  변수(`var`iables)
 *  - "변하는 수": x, y
 *  상수(`const`ant)
 *  - "항상 일관된 수": 값(Value)
 */

// --------------------------------------------
// 변수(Variable)

// 변수 정의
// undefined 데이터(자료) 값
var favorite_item;

// 선언된 변수에 값을 할당(대입) <= 대입 연산자(=)
favorite_item = 'Macbook Pro'; // 값(리터럴: Literal)

// 콘솔.기록하다(무엇을)
console.log(favorite_item); // 'Macbook Pro'

// 문서에서 속성이 lang 이며, 속성 값이 "en"인 요소를 찾는다.
// DOM = 문서객체모델(Document Object Model)
// DOM Script = DOM API + JavaScript
// 변수를 사용하는 이유!
// 문서에서 (힘들게 비용을 들여서) 찾은 객체는 다시 사용할 수 있게 메모리에 기억해둔다.
var target_p = document.querySelector('p[lang="en"]');
// 변수에 참조된 문서 객체에 설정(조작)한다.
// target_p.innerText = favorite_item;

// jQuery Library <= JavaScript + DOM
// $('p[lang="en]').text(favorite_item);

// --------------------------------------------
// 상수(Constant)

// const 키워드를 사용하여 상수를 정의
// 선언과 동시에 값을 할당할 수도 있다.
const PI = 3.141592;
// const PI = '파이';
const day_to_hour = 24;

// 상수의 이름 작성 규칙은 대부분 변수와 유사
// 하지만 모든 이름의 철자를 대문자로 써주는 것이 관례
console.log(PI);
console.log(day_to_hour);

// --------------------------------------------
// 연산자(Operator)
// --------------------------------------------

// 수와 관련된 연산(산술 연산)
// +, -, *, /, %

// var x;
// var y;

// var 키워드를 한 번만 사용하는 방법
// single var pattern
var x, y;

// 선언된 변수에 값을 할당
// assign value
x = 10;
// 연산 수행 후, 결과 값을 변수 y에 할당
y = ( x / x * 10 ) % 3;

console.log('y =', y);

// 문자와 관련된 연산
// 문자 + 문자 => 문자 접합(붙이다)
var word1 = "paper",
    word2 = "strategy";

console.log('word1:', word1);
console.log('word2:', word2);
console.log('word1 + word2:', word1 + word2);

// --------------------------------------------
// 숫자 + 문자 연결했을 때
// 숫자가 문자화 된 후에 문자와 접합된다.
var current_year, year_word;
current_year = 2017; // 숫자
year_word    = '년'; // 문자

// 숫자 + 문자 => 숫자(문자화) + 문자 => 문자 접합
var current = current_year + year_word;
console.log('current:', current);

// 변수에 기억된 문서 객체에 접근하여 조작한다.
// target_p.innerText = current; // '2017년' 문자 데이터 값이 설정

// 'Macbook Pro, 2017년 모델'
// favorite_item + '. ' + current + ' 모델'
// target_p.innerText = favorite_item + '. ' + current + ' 모델';

// 문서에서 이벤트 제어를 처리할 버튼을 찾자.
var answer_btn = document.querySelector('.answer-favorite-item');
console.log('answer_btn:', answer_btn);

// 사용자가 버튼을 클릭하면
answer_btn.onclick = function() {
  // 수행할 일(function): 목표로 하는 단락 요소의 텍스트 값을 화면에 표시합니다.
  target_p.innerText = favorite_item + '. ' + current + ' 모델';
};

// --------------------------------------------
// 선(후) 증가/감소 연산자
// ++ / --

var z = 10;

z++; // "후증가" 현재 라인에서는 z 값이 변화하지 않는다. z = 10
console.log('z =', z); // 다음 라인이기에 값은 변화된다. z = 11

z--; // "후감소" 현재 라인에서는 z 값이 변화하지 않는다. z = 11
console.log('z =', z); // 다음 라인이기에 값은 변화된다. z = 10

++z; // "선증가" 현재 라인에서 즉시 z 값이 변화한다. z = 11
console.log('z =', z); // 값은 이미 변화되어 그대로이다. z = 11

--z; // "선감소" 현재 라인에서 즉시 z 값이 변화한다. z = 10
console.log('z =', z); // 값은 이미 변화되어 그대로이다. z = 10

// --------------------------------------------
// 대입 연산자
// =
// +=
// -=
// *=
// /=
// %=

var k = 99;

// k = k + 10; // 99 + 10 = 109

// 위 방법과 아래 방법은 결과적으로 동일하다.
k += 10; // 99 + 10 = 109

console.log('k:', k); // 109

// +1 ?
k = k + 1; // 110
k += 1;    // 111
k++;       // 111
           // 112

k = k - 1; // 111
k -= 1;    // 110
--k;       // 109

// --------------------------------------------
// 이스케이프(Escape) 처리, 백슬래시(\) 사용

// var you_are = 'I'm a boy'; // ERROR
var you_are = 'I\'m a boy'; // Escape 처리

// var your_recored_is = 'my record is 18' 24".'; // ERROR
var your_recored_is = 'my record is 18\' 24".'; // Escape 처리

// --------------------------------------------
// 논리(Boolean)
// true | false

// 숫자 중에서 오직 0만이 자동으로 Boolean 값을 바뀌었을 때 false가 된다.
var type_casting_zero = Boolean(0); // false

// 상태(State)를 기억하기 위한 변수는 일반적으로 Boolean 값을 담는다.
// is_*
// has_*
var is_opened    = false;
var has_children = true;

// ------------------------------------------------
// JavaScript 세상에서 객체가 아닌 2가지
// undefined, null
//
// 이들은 객체가 아니기에 속성(Property)을 가질 수 없다.
// [ERROR] cannot set property of null
// [ERROR] cannot set property of undefined

// 변수를 선언만 하고, 값을 할당하지 않은 초기 상태의 값은 undefined 이다.
// 문서 객체의 이벤트 속성 초기 값은 모두 null 이다.
// HTML 구조화한 요소들(Element, Tags(<element_name>))

// 숫자 유형 -> 문자 유형으로 변경하는 4가지 방법
// 1. '숫자' 문자화
// 2. 숫자 + ''
// 3. String(숫자)
// 4. (숫자).toString()

// 문자(숫자와 유사한) -> 숫자로 변경하는 방법
// 1. -, *, / 등을 사용
// 2. +문자(like number)
// 3. Number(문자(like number))

// 문자(숫자를 포함하는 문자(단위: px, em, ...)) -> 숫자 (문자(단위//) 제거)
// 내장 함수(Built-in, Native)
// parseInt('24px', 10) -> 24
// parseFloat('18.34529px', 10) -> 18.34529
