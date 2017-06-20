/*! jquery.study.js © yamoo9.net, 2017 */

// jQuery $ 별칭 충돌 문제 해결책
// $ 변수의 소유권을 포기하다.
$.noConflict();
// noConflict() 함수 내부에 true를 전달하면
// window.jQuery 변수도 포기한다.
// 대신 jQuery 객체를 반환하기에 별도의 변수에 참조하여
// 사용 가능하다.
var $j = $.noConflict(true);
console.log($.version); // '0.0.1'

// jQuery === Function 함수
// window === 전역 객체
// window.jQuery 존재하면 사용 가능
console.log('jQuery 사용 가능?', !!window.jQuery);

// jQuery 별칭(Alias)
// 주의! $ 변수가 항상 jQuery를 가리키는 것은 아니다!!!
// 일반적으로 JavaScript 라이브러리는 $ 변수를 자주 사용한다.
console.log('window.jQuery === window.$:', window.jQuery === window.$);

// jQuery Ready Function
// Instance Method
// .ready(function(){})

// 아래 코드는 모두 동일하게 처리된다.
// $(window.document).ready(init);
// $(document).ready(init);
// $(init);

// 애플리케이션 초기화 함수
function init() {
  console.log('jquery ready 실행되었습니다.');
  // jQuery Overview
  // DOM Traversal + Manipulation
  // 문서객체모델을 탐색한 후, 조작해보자.
  // $(document.body)
  // $아이언맨(토니스타크).레이저빔()
  $j('body').html('<p>jQuery 라이브러리를 사용하여 body 요소 내부에 동적으로 p 요소를 추가했습니다.</p>');
}

// jQuery().ready() 함수를 줄여서 사용할 때
$j(function() {
  console.log('jquery ready 실행되었습니다.');
  $j('body').html('<p>jQuery 라이브러리를 사용하여 body 요소 내부에 동적으로 p 요소를 추가했습니다.</p>');
});
