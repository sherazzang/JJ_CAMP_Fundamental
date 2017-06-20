/*! eventHandlingEx.js © yamoo9.net, 2017 */

// 문서에서 .toggle-button 인 요소를 찾는다.
// 문서에서 .memo 인 요소를 찾는다.
// var toggle_btn, memo;
var toggle_btn = document.querySelector('.toggle-button');
var memo       = document.querySelector('.memo');
// console.log('toggle_btn:', toggle_btn);
// console.log('memo:', memo);

// 메모 요소는 화면에 보여지고 있는가? (상태 변수: 초기 값: true)
var memo_is_visible = true; // 보여지고 있다.
var toggle_btn_content = 'Hide'; // hide <-> show

// 문서에서 찾은 .toggle-button 버튼을 사용자가 클릭하면
// console.log('toggle_btn.onclick:', toggle_btn.onclick); // null

toggle_btn.onclick = function(){

  // .memo 요소는 화면에서 보여지거나, 감춰진다.
  // 만약 ( memo_is_visible 값이 참(true)이면 ) {
  //   memo 변수에 참조된 문서 객체를 화면에서 감추겠다.
  // } 그렇지 않으면 {
  //   memo 변수에 참조된 문서 객체를 화면에서 보여주겠다.
  // }

  // a == b : 비교 연산자
  // if ( memo_is_visible == true ) {
  if ( memo_is_visible ) {
    memo.style.opacity = 0;
    // 상태 변경
    toggle_btn_content = 'Show';
    toggle_btn.innerText = toggle_btn_content;
  } else {
    memo.style.opacity = 1;
    toggle_btn.innerText = 'Hide';
    toggle_btn_content = 'Hide';
  }

  // 코드 실행 이후에 상태가 변견되어야 한다.
  memo_is_visible = !memo_is_visible;
  // console.log('memo_is_visible:', memo_is_visible);

};

// --------------------------------------------------------------

////////////////////////////////
// 코드 리뷰 -> 코드 리팩토링
////////////////////////////////

// 변수 정의 후에 함수 값을 대입
// var a = function() {};
// var toggleMemoControl = function(){

// 함수 선언
function toggleMemoControl(){
  if ( memo_is_visible ) {
    memo.style.opacity = 0;
    toggle_btn_content = 'Show';
  } else {
    memo.style.opacity = 1;
    toggle_btn_content = 'Hide';
  }
  toggle_btn.innerText = toggle_btn_content;
  memo_is_visible = !memo_is_visible;
};

toggle_btn.onclick = toggleMemoControl;
