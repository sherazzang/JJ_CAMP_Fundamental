/*! js.core.loop.js © yamoo9.net, 2017 */

////////////////////
// 자바스크립트 조건 구문
////////////////////

// if ~ else if ~ else
// ? :
// && ||
// switch case default break

// --------------------------------------------

////////////////////
// 자바스크립트 반복 구문
////////////////////

// while, do ~ while, for, for ~ in

// --------------------------------------------

/////////////////////////////
// if (){}  VS  while (){} //
/////////////////////////////

console.groupCollapsed('if() {}  VS  while() {}');
// 컨디션 변수
var condition     = 'fine';
var past_hour     = 0;
var console_style = '\
  color         : #fff;\
  background    : #000000;\
  padding       : 0.3em 0.8em;\
  border-radius : 5px;\
';


// 조건이 참이면, if는 1회 수행
if ( condition === 'fine' ) {
  console.log('%c오늘 기분 참 좋네요.', console_style);
} else {
  console.log('%c오늘 기분은 참 우울해요...', console_style);
}
console.log('past_hour 초기 값:', past_hour);

// while은 참일 동안 반복 수행
// 주의! 계속 참이면 무한 반복에 빠짐!!!!
while ( condition === 'fine' ) {
  console.log('오늘 계속 기분이 참 좋을 거 같아요.');
  // 조건에 따라 기분이 변경되어야 반복 구문이 멈춘다.
  // 시간이 지남에 따라 기분이 우울해진다.
  if ( past_hour >= 5 ) {
    condition = 'sad';
  }
  // 시간 증가
  past_hour = past_hour + 1;
  console.log('past_hour:', past_hour);
}
console.groupEnd('if() {}  VS  while() {}');

// --------------------------------------------

console.groupCollapsed('달마시안 출력');
var dalmasian_count     = 0;    // 출력할 조건 변수 선언 및 초기 값 할당(대입)
var dalmasian_max_count = 101;

// 콘솔에 1차적으로 0부터 101까지 출력해보겠다.
while ( dalmasian_count <= dalmasian_max_count ) {
  console.log(dalmasian_count + '마리 달마시안'); // 0, 1, 2, 3, ... , 101
  // 조건이 변경되는 부분
  // 반복문에서 아주 아주 아주 중요한 부분
  // STEP 1
  dalmasian_count = dalmasian_count + 1;
  // STEP 2
  dalmasian_count += 1;
  // STEP 3
  dalmasian_count++;
  // ++dalmasian_count;
}
console.groupEnd('달마시안 출력');


console.groupCollapsed('numbers 데이터 출력 +7');
// 사용자 화면에 숫자를 0부터 101까지 출력해보겠다.
// 서버로부터 numbers 데이터 값을 받아왔다.
// 그 데이터 값을 사용자 화면에 뿌려야 한다. (랜더링, 그린다)

// 서버로부터 받아온 데이터 중 최솟값: 19
var numbers_min = 5;
// 서버로부터 받아온 데이터 중 최솟값: 2018
var numbers_max = 100;
// 변위 값
var displacement_value = 10;
// 화면에 데이터를 뿌릴 컨테이너 요소를 참조
var n_list = document.querySelector('.numbers_list');
// console.log(n_list);

// 특징: 값은 7만큼 증가하더라 (조건이 참일 동안, 출력한다.)
while ( numbers_min <= numbers_max ) {
  // 콘솔에 출력한다.
  // console.log(numbers_min);
  // 사용자 화면(UI)에 리스트로 출력한다.
  n_list.innerHTML += '<li>' + numbers_min + '</li>';
  // 변수를 변경한다.
  numbers_min += displacement_value;
}
console.groupEnd('numbers 데이터 출력 +7');

