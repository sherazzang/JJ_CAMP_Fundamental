/*! jquery.study.part-3.js © yamoo9.net, 2017 */

jQuery(function($){
  // $ === jQuery
  // 안전 영역

  // 팩토리 함수 사용 방법 1.
  // CSS 선택자(Selector)
  // .gnb
  var $gnb        = $('.gnb');
  // $() 팩토리 함수의 2번째 인자: context 객체 활용
  var $list       = $('.list', $gnb);
  // 자식을 찾다(children)
  var $list_items = $list.children('li');
  // 자손을 찾다(find)
  var $list_links = $list.find('a');
  // ul.list 안에서 a 요소를 찾을 때 .children() 사용하면 못 찾는 이유: 자식이 아니라, 자손이기 때문
  // var $list_links = $list.children('a');

  console.log('$gnb:', $gnb);
  console.log('$list:', $list);
  console.log('$list_items:', $list_items);
  console.log('$list_links:', $list_links);

  // 팩토리 함수 사용 방법 2-1.
  // 문서객체를 직접 전달하는 경우
  // $('body')
  $(document);
  $(document.body);
  $(document.querySelector('body'));
  $(document.getElementById('app'));

  // 팩토리 함수 사용 방법 2-2.
  // 요소의 집합(Nodelist)을 전달하는 경우
  $(document.querySelectorAll('.list a'));
  $(document.getElementsByTagName('a'));

  // 팩토리 함수 사용 방법 3.
  // JavaScript 객체(Object) 전달하는 경우
  var $y9 = $({
    name: 'yamoo9',
    job: 'Instructor'
  });
  // console.log('$y9:', $y9);

  // 팩토리 함수 사용 방법 4.
  // var $html = $('html');
  // $( $html );

  // 팩토리 함수 사용 방법 5.
  // $();

  // --------------------------

  // $() 팩토리 함수의 다른 사용법
  // $(html_code) <- 요소 생성

  $('<h1 class="app-title">Hello jQuery</h1>')
    // 조작(Manipulation) 메서드
    // 부모 내부에 자식을 삽입하는 경우
    // .prepend(자식)
    // .prependTo(부모)
    // .append(자식)
    // .appendTo(부모)
    .prependTo('#app');

    // 미션!
    // .list 내부에 동적으로 HTML 코드를 생성하여
    // 추가해보시오.

    // 코드를 자식부터 시작해야 할 경우
    // 메서드 체이닝 사용 가능 X
    $('<li><a href="">Lorem ipsum.</a></li>').appendTo($list);
    $('<li><a href="">Laboriosam, dignissimos.</a></li>').appendTo($list);
    $('<li><a href="">Velit, accusamus.</a></li>').appendTo($list);
    $('<li><a href="">Doloribus, unde!</a></li>').appendTo($list);

    // 코드를 부모부터 시작해야 할 경우
    // 메서드 체이닝 사용 가능
    $list
      .append('<li><a href="">Lorem ipsum.</a></li>')
      .append('<li><a href="">Laboriosam, dignissimos.</a></li>')
      .append('<li><a href="">Velit, accusamus.</a></li>')
      .append('<li><a href="">Doloribus, unde!</a></li>');

});
