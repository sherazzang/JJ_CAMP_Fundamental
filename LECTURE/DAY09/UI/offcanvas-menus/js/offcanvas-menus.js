/*! offcanvas-menus.js © yamoo9.net, 2017 */
jQuery(function($){
  // 제어하고자 하는 문서 요소를 찾아
  // jQuery 객체화 시킨다.

  // 모바일 뷰에서만 보이는 햄버거 토글 버튼
  var $m_button    = $('.y9-hamburger-menu a');
  // 글로벌 내비게이션 바
  var $gnb         = $('.main-nav');
  // 카트 메뉴 토글 버튼
  var $cart_button = $('.y9-cart-trigger a');
  // 카트 메뉴
  var $cart_menu   = $('.y9-cart');
  // 딤
  var $dim         = $('.y9-shadow-layer');
  // 현재 사용자 화면에 표시되는 활성화 요소 (기억)
  var $activated   = null;

  /**
   * --------------------------------
   * 이벤트 바인딩 <-> 핸들러
   */
  $m_button.on('click', function() {
    crossMenuControl($gnb);
  });
  $cart_button.on('click', function() {
    crossMenuControl($cart_menu);
  });
  $dim.on('click', function() {
    closeMenu($activated);
  });

  /**
   * --------------------------------
   * 이벤트 핸들러 정의
   */
  function crossMenuControl($target) {
    var $cross_target = $target.is($gnb) ? $cart_menu : $gnb;
    if ( $activated ) {
      if ( $activated.is($cross_target) ) {
        window.setTimeout(function() {
          toggleMenu($target);
        }, 0);
      }
      closeMenu($activated);
    } else {
      toggleMenu($target);
    }
  }
  function toggleMenu($target) {
    $activated = $target;
    $target.toggleClass('out-in');
    $dim.toggle(); // show <-> hide
  }
  function closeMenu($activated_target) {
    if ( !$activated_target ) { return; } // 종료
    $dim.hide();
    $activated_target.removeClass('out-in');
    // $activated 초기화
    $activated = null;
  }

});
