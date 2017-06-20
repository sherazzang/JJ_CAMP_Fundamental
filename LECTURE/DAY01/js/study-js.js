// 웹 브라우저 환경에서 JavaScript의 처리 흐름

// 직렬(Sync) 프로세스
// A -> B -> C
// 병렬(Async) 프로세스
// A -> A+
//   B -> B-

// 이벤트: window 창이 로드(load) 되면
// 할 일: 함수(function) -> 제목을 찾아서 색상을 변경한다
window.onload = function(){

  // h1#heading 요소에 JavaScript로 접근하여
  // var -> 변수(variable) 선언 식별 키워드
  var heading = document.querySelector('#heading');
  console.log(heading); // null "비어 있다"

  // 제목 요소의 글자 색상을 변경한다.
  heading.style.color = 'hotpink'; // Error

};















