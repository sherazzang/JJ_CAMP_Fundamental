/*! javascript-core.js © yamoo9.net, 2017 */

///////////////////
// 지금까지 배운 것 복습
///////////////////

// JavaScript 변수 그리고 상수
// var 키워드 (실행 중에 변경 가능)
// const 키워드 (실행 중에 변경 불가능)

// JavaScript 연산자
// 산술(사칙) 연산자 +, -, *, /, %
// 대입(할당) 연산자 =, +=, -=, *=, /=, %=
// 비교 연산자 ==, !=, >=, >, <=, <, ===, !==
// 부정 연산자 !
// 논리곱, 논리합 연산자 A && B, A || B


// JavaScript 자료형
// 객체인 것들
// number,
// string,
// boolean,
// function,
// array,
// object

// 객체가 아닌 것
// undefined,
// null


// JavaScript 값 복사 or 참조

// 값 복사(pass by value)
// [primitive data types]
// number, string, boolean
// undefined, null

// 값 참조(pass by reference)
// [Object Types]
// function
// array
// object

// JavaScript 자료형 구분 방법
// 1. typeof
//    null, array 올바르게 인지할 수 없다.
// 2. instanceof
//    기대하는 바와 다르게 동작한다. (원시 데이터 유형)
// 3. .constructor (생성자)
//    JavaScript 객체라면? 모두 가지고 있는 속성
//    아쉽게도 객체가 아닌 유형은 판별이 안됩니다. (오류 발생)
// 4. detectType()
function detectType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

// JavaScript 함수
// 코드 재사용 목적으로 묶음 처리하여 호출 실행하는 데이터(객체)
// 함수 표현식 vs 함수 선언문
var fn = function() {}; // 표현식
function fn2() {}       // 선언문

// JavaScript 배열
// 값의 집합
var data = []; // new Array() [x]
// 배열 데이터 추가
data[0] = 2019;        // [index] 권장되지 않는 방법
data.push(2901);       // 배열 객체의 메서드(능력)
data.length;           // 배열 객체가 소유한 원소의 총 개수
data[data.length - 1]; // 배열 마지막 원소에 접근하는 방법

// JavaScript 객체
// 속성:값 (쌍)으로 구성된 정보 덩어리(데이터, 객체)
// CSS 선언 문법과 유사.
var sunmin = {
  name: '선민',
  age: 9,
  goto: function(destinatino) { console.log( this.name ); }
}

// JavaScript 실행 흐름
// 웹 브라우저 환경에서 코드의 실행 흐름
// HTML -> CSS -> JavaScript
// <head> 내에서 문서 객체(사용자가 이용하는 UI)에
// 영향을 주는 스크립트의 경우 호출하지 않는 것이 권장된다.
// </body> 바로 위에서 호출하는 것이 보다 좋다.

// JavaScript 문서 객체 참조 방법
var body = window.document.body;                            // Legacy DOM (lv0)
var body = window.document.getElementsByTagName('body')[0]; // DOM lv1
var body = window.document.querySelector('body');           // DOM lv4

// JavaScript 이벤트 리스너와 이벤트 핸들러
// 사용자가 이벤트를 발생시키면 (입력하면, 클릭하면, 마우스를 올리면)
// 이벤트를 감지하여 함수(핸들러)를 실행한다.
// 사용자가 엔터(Enter) 키를 누르면 사용자에게 알려주겠다.
// window.document.onkeyup = function(e) {
//   var key = e.keyCode || e.which;
//   if ( key === 13 ) {
//     window.alert('엔터 키를 누르셨습니다.');
//   }
// }

// 사용자가 숫자만 입력할 수 있도록 처리하는 스크립트
// https://jsfiddle.net/x9ct74c6/2/

// 키코드 값을 화면에 출력해주는 사이트
// http://keycode.info/



//////////////
// 조건 처리 구문
//////////////

// 조건에 따라 문장을 달리 처리해주는 것을 말한다.

// 표현식 vs 구문(문장)
// 표현식
// var result = 9 * 10 / 3;

// if 구문
// "만약 (조건)이 참(true)이라면 ~~ 하라."
// "그렇지 않다면(조건이 거짓(false)이라면) ~~~ 하라."
var count = 0;

console.groupCollapsed('간단한 if 구문 연습');
if ( count === 10 ) {
   console.log("count is ten.");
} else {
   console.log("count isn't ten.");
}
console.groupEnd('간단한 if 구문 연습');

// TODO
// 문서에서 객체 대상을 참조
var button, list;
// 버튼
button = document.querySelector('.show-hide-button');
// 리스트
list = document.querySelector('.show-hide-list');

console.groupCollapsed('button, list 문서객체 찾기');
console.log('button:', button);
console.log('list:', list);
console.groupEnd('button, list 문서객체 찾기');

// 해당 객체에 이벤트 리스너(속성)를 설정
button.onclick = detectVisibleAndProcess;

// 리스너가 감지한 이벤트를 처리할 핸들러(함수) 작성
function detectVisibleAndProcess() {
  // [조건]            : list 요소에 style 속성 값이 존재하는가?
  var condition = list.hasAttribute('style');
  // [조건이 참일 경우]   : 존재한다면_
  if ( condition ) {
    // list 문서 객체 요소는 style 속성을 가지고 있기에 이를 제거한다.
    list.removeAttribute('style');
    button.textContent = '목록 감추기';
  }
  // [조건이 거짓일 경우] : 존재하지 않는다면_
  else {
    // list 문서 객체 요소의 style 속성을 설정 한다.
    list.setAttribute('style', 'display: none');
    button.textContent = '목록 보이기';
  }
}

// CSS는 스타일 언어이기에 JavaScript 처럼 조건 처리가 안된다.
// 하지만 JavaScript를 사용하면 CSS로도 조건 처리가 가능하다.

// e.g) 자바스크립트 지원되는 환경 vs 미지원 환경
// 조건을 확인한 후에 <html> 요소에 class 속성 값에 식별 가능한
// 값을 설정하여 CSS로 핸들링한다.

// TODO
// 문서에서 <html> 요소를 찾아온다.
var html = document.documentElement;
// 해당 요소의 class 속성 값을 변경한다.
html.setAttribute('class', 'js');

// --------------------------
// for 구문 사용 예시

var cards = document.querySelectorAll('.card');
var card;
var card_toggle_button;
var card_save_button;
var card_edit_button;
var card_delete_button;
var card_content;

for ( var i=0; i<cards.length; i++ ) {
  card = cards[i];
  card_toggle_button = card.querySelector('.card-header-icon');
  card_save_button   = card.querySelector('.card-save-button');
  card_edit_button   = card.querySelector('.card-edit-button');
  card_delete_button = card.querySelector('.card-delete-button');
  card_content       = card.querySelector('.card-content');

  // 이벤트 리스너에 핸들러를 연결(Binding Event Handler)
  card_toggle_button.onclick = toggleCardButton;
  card_save_button.onclick   = saveCard;
  card_edit_button.onclick   = editCard;
  card_delete_button.onclick = deleteCard;
}










// --------------------------



// TODO
// Card Folding Example
// 문서 Card 객체 참조
// var card               = document.querySelector('.card');
// var card_toggle_button = card.querySelector('.card-header-icon');
// var card_save_button   = card.querySelector('.card-save-button');
// var card_edit_button   = card.querySelector('.card-edit-button');
// var card_delete_button = card.querySelector('.card-delete-button');
// var card_content       = card.querySelector('.card-content');
// // console.groupCollapsed('Card 컴포넌트 문서 객체 참조');
// // console.log('card:', card);
// // console.log('card_toggle_button:', card_toggle_button);
// // console.log('card_delete_button:', card_delete_button);
// // console.log('card_content:', card_content);
// // console.groupEnd('Card 컴포넌트 문서 객체 참조');

// // 이벤트 리스너에 핸들러를 연결(Binding Event Handler)
// card_toggle_button.onclick = toggleCardButton;
// card_save_button.onclick   = saveCard;
// card_edit_button.onclick   = editCard;
// card_delete_button.onclick = deleteCard;

// 핸들러(함수) 정의
function toggleCardButton(event) {
  // 브라우저가 처리하는 기본 동작 차단
  // 기본 동작을 막다 "prevent browser's default action."
  event.preventDefault();
  // 상태 클래스(Modifier): is-hidden 클래스 토글(toggle)
  // console.log('this:', this); // this === button element
  var is_hidden = card_content.classList.contains('is-hidden');
  var icon      = this.querySelector('.fa'); // class 속성 값을 교체
  if ( is_hidden ) { // 감춰진 상태
    card_content.classList.remove('is-hidden');
    // this === <a> 요소의 title, aria-label 값을 변경
    this.setAttribute('title', 'Card Hide');
    this.setAttribute('aria-label', 'Card Hide');
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  } else { // 보여지는 상태
    card_content.classList.add('is-hidden');
    this.setAttribute('title', 'Card Show');
    this.setAttribute('aria-label', 'Card Show');
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');
  }
};
function saveCard(event) {
  event.preventDefault();
  card_content.setAttribute('contenteditable', false);
}
function editCard(event) {
  event.preventDefault();
  card_content.setAttribute('contenteditable', true);
  card_content.focus();
}
function deleteCard(event) {
  event.preventDefault();
  // 카드.부모.removeChild(카드);
  // 나의 부모.removeChild(나);
  card.parentNode.removeChild(card);
};


// 조건이 3개 이상인 경우의 if 구문
var condition = 'hard';

console.groupCollapsed('조건이 3개 이상인 경우의 if 구문 실습');
if ( condition === 'hard' )        { console.log('hard');                }
else if ( condition === 'memory' ) { console.log('memory');              }
else if ( condition === 'glass' )  { console.log('glass');               }
else                               { console.log('else hard or memory'); }
console.groupEnd('조건이 3개 이상인 경우의 if 구문 실습');


// 논리곱(&&), 논리합(||) 연산자 활용
var num = 46;

console.groupCollapsed('논리곱, 논리합 연산자 활용 구문 실습');
console.log('num:', num);
// 만약 num 변수 값이 5보다 크고, 10보다 작다면?
if ( num > 5 && num < 10 ) {
  console.log('num 변수 값이 5보다 크고, 10보다 작다.');
}
// 만약 num 변수 값이 15보다 작거나, 45보다 크거나 같으면?
if ( num < 15 || num >= 45 ) {
  console.log('num 변수 값이 15보다 작거나 혹은 45보다 크거나 같다.');
}
console.groupEnd('논리곱, 논리합 연산자 활용 구문 실습');



// if 구문을 사용한 조건 처리 예시
var sentence_use_jQuery = null;

if ( window.jQuery ) {
   sentence_use_jQuery = true;
} else {
   sentence_use_jQuery = false;
}

/////////////////
// 3항 연산식(표현식)
/////////////////

// 3항 연산자 표현식을 활용한 조건 처리
// var use_jQuery = 조건 ? 참인경우 실행 구문 : 거짓인 경우 실행 구문;
var use_jQuery = window.jQuery ? true : false;

// 다중 3항 연산자 표현식을 사용하여 조건 처리
// 아래 코드는 사람이 읽기 쉽도록 하기 위해 여러 줄로 작성한 것일 뿐,
// 표현식이기에 한 줄로 작성이 가능하다.
var recieved_data = window.recieve ?
                      'recieve' :
                      window.document ?
                        'document' :
                        window.mouseControl ?
                          'mouseControl' :
                          null;

console.groupCollapsed('다중 3항 연산자 표현식 실습');
console.log('recieved_data:', recieved_data);
console.groupEnd('다중 3항 연산자 표현식 실습');



// switch 구문
// case를 감지해서 처리를 switch 해주는 구문
// switch, case, break, default

// switch(조건비교대상) {
//   // case1
//   case 값1:
//     값1인 경우의 코드 실행
//     값1인 경우의 코드 실행
//     값1인 경우의 코드 실행
//     값1인 경우의 코드 실행
//   // case2
//   case 값2:
//     값2인 경우의 코드 실행
//     값2인 경우의 코드 실행
//     값2인 경우의 코드 실행
//   // case3
//   case 값3:
//     값3인 경우의 코드 실행
//     값3인 경우의 코드 실행
// }

var today = '나의요일';

console.groupCollapsed('switch 구문 실습');
console.log('today:', today);
console.log('%c------------------------------', 'color: #3d9a21');

switch(today) {
  // default 키워드 구문의 위치는 어디든 상관 없다.
  // 대신 앞에 나올 경우, 뒤 구문이 실행되지 않도록 break 해줘야 한다.
  default:
    console.info('입력하신 요일은 존재하지 않습니다.');
  break;
  case '월요일':
    console.log('today is 월요일.');
  break;
  case '화요일':
    console.log('today is 화요일.');
  break;
  case '수요일':
    console.log('today is 수요일.');
  break;
  case '목요일':
    console.log('today is 목요일.');
  break;
  case '금요일':
    console.log('today is 금요일.');
  break;
  case '토요일':
    console.log('today is 토요일.');
  break;
  case '일요일':
    console.log('today is 일요일.');
  break;
}
console.groupEnd('switch 구문 실습');
