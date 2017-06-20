/*! jquery.study.part-2.js © yamoo9.net, 2017 */

// jQuery 레디 메서드 활용
// 문서객체모델이 준비되면 함수(핸들러) 실행
// $(document).ready(function(){});
// $().ready(function(){});
// window.jQuery.noConflict(true)(function($){
window.jQuery(function($){
  // 이 안에서 만큼은 $가 jQuery 이다.
  // $().jquery 버전 출력
  console.log('in:', $().jquery); // '3.2.1'

  var $body = $('body'); // return jQuery Object
  // $body 객체는 jQuery의 능력을 모두 사용할 수 있다.
  // $body.addClass('this-is-body-element');
  // $body.addClass('add-class-name-using-jquery-library');

  // 메서드 체이닝(Methods Chaining)
  $body.addClass('this-is-body-element')
       .addClass('add-class-name-using-jquery-library');

});

// console.log('out:', $().jquery); // ERROR: Uncaught TypeError: $ is not a function
