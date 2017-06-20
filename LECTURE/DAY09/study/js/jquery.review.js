/*! jquery.review.js © yamoo9.net, 2017 */

/////////////////////
// Class Attribute //
/////////////////////
// .addClass()    ///
// .removeClass() ///
// .hasClass()    ///
// .toggleClass() ///
/////////////////////

// <head> 내부에 스크립트 파일을 로드하기 때문에
// <body> 내부의 요소가 완성된 이후에 코드를 처리하려면
// ready() 메서드를 사용해야 하기 때문
// jQuery(document).ready(function($) {
//   // [1] 문서에서 .container 요소를 찾아 jQuery 객체로 만들자.
//   var $container = $('.container');
//   // [2] 동적으로 <div class="demo-tester"></div> 요소를 jQuery 객체로 만들자.
//   var $demo_tester = $('<div>'); // jQuery 객체 생성
//   $demo_tester.addClass('demo-tester');
//   // [3] .container 요소를 래핑한 jQuery 객체 내부에 .demo-tester를 자식으로 삽입하자.
//   // $demo_tester.appendTo($container);
//   $container.append($demo_tester);
// });

// VS

// jQuery(function($) {
//   var $demo = $('<div>')
//     .addClass('demo-tester')
//     .appendTo('.container');

//   // 시간이 1초가 지나면, after-1sec 클래스를 추가
//   // 1second = 1000ms
//   window.setTimeout(function() {
//     console.log('1초가 지났다.');
//     $demo
//       .addClass('after-1sec shockwave')
//       .toggleClass('jj-camp');
//     if ( $demo.hasClass('demo') ) {
//       console.log(1000, '$demo 객체는 .demo 클래스를 소유하고 있다.');
//     }
//   }, 1000);

//   window.setTimeout(function() {
//     console.log('2초가 지났다.');
//     $demo
//       .addClass('after-2sec this-isnt-flash demo')
//       .removeClass('shockwave');

//     if ( $demo.hasClass('demo') ) {
//       console.log(2000, '$demo 객체는 .demo 클래스를 소유하고 있다.');
//     }
//   }, 2000);

//   window.setTimeout(function() {
//     console.log('3초가 지났다.');
//     $demo
//       .removeClass('this-isnt-flash after-1sec')
//       .toggleClass('jj-camp')
//       .addClass('after-3sec');

//     if ( $demo.hasClass('demo') ) {
//       console.log(3000, '$demo 객체는 .demo 클래스를 소유하고 있다.');
//     }
//   }, 3000);
// });


// --------------------------------------------------------------

//////////////////////////////
// Class Attribute — Action //
//////////////////////////////

// .box 요소 추가
// jQuery(function($) {
//   var $box = $('<div class="box">').insertAfter('.container');
//   $box.on('click', function() {
//     console.log('this:', this.addClass);       // undefined
//     console.log('$(this):', $(this).addClass); // function
//     $(this).addClass('is-rotate is-round');
//   });
//   $box.on('transitionend', function() {
//     var $r = $(this).removeClass('is-round is-rotate');
//     // $r.addClass('is-reverse-rotate');
//   });
// });

// jQuery(function($) {
//   var $box = $('<div class="box">').appendTo('body');
//   $box.on('click', function() {
//     var $this = $(this);
//     $this.toggleClass('is-scale-2by1');
//     // if ( $this.hasClass('is-scale-2by1') ) {
//     //   $this.removeClass('is-scale-2by1');
//     // } else {
//     //   $this.addClass('is-scale-2by1');
//     // }
//   });
// });

// window.setInterval(function(){
//   $('.box').toggleClass('is-scale-2by1');
// }, 1000);

// --------------------------------------------

jQuery(function($) {
  var intervalId = 0;
  // body
  var $body = $(document.body);
  // box
  var $box = $('<div class="box">').appendTo($body);
  // button
  // infinite play
  var $play_btn = $('<button type="button" class="button infinite-play-button">infinite play</button>').insertBefore($box);
  // stop
  var $stop_btn = $('<button type="button" class="button stop-button">stop</button>').insertAfter($box);
  // var $stop_btn = $box.after('<button type="button" class="button stop-button">stop</button>');

  // console.log('$stop_btn:', $stop_btn);

  $box.on('click', transformBox);

  $play_btn.on('click', function() {
    intervalId = window.setInterval(transformBox, 1000);
    console.log('intervalId:', intervalId);
  });

  $stop_btn.on('click', function() {
    console.log('intervalId in $stop_btn:', intervalId);
    window.clearInterval(intervalId);
  });

  function transformBox() {
    $box.toggleClass('is-scale-2by1');
  }

});
